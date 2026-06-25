"use client";

import { useState } from "react";

const SLIDE_SELECTOR = "[data-ebr-slide]";
const UNSUPPORTED_COLOR_FUNCTION_PATTERN = /\b(?:lab|lch|oklab|oklch)\(/i;
const COLOR_STYLE_PROPERTIES = [
  "color",
  "backgroundColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor",
  "outlineColor",
  "textDecorationColor",
  "boxShadow",
  "backgroundImage",
] as const;

export function BriefingActions() {
  const [isGenerating, setIsGenerating] = useState(false);

  async function exportPdf() {
    setIsGenerating(true);

    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const slides = Array.from(
        document.querySelectorAll<HTMLElement>(SLIDE_SELECTOR),
      );

      if (slides.length === 0) {
        throw new Error("No Executive Business Review slides found.");
      }

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: "a4",
        compress: true,
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageMargin = 24;
      const maxImageWidth = pageWidth - pageMargin * 2;
      const maxImageHeight = pageHeight - pageMargin * 2;

      for (const [index, slide] of slides.entries()) {
        const { clone, container } = createNormalizedSlideClone(slide);
        document.body.appendChild(container);

        let canvas: HTMLCanvasElement;

        try {
          canvas = await html2canvas(clone, {
            backgroundColor: "#f5f7fb",
            logging: false,
            scale: Math.max(2, window.devicePixelRatio || 1),
            useCORS: true,
            windowHeight: clone.scrollHeight,
            windowWidth: clone.scrollWidth,
          });
        } finally {
          document.body.removeChild(container);
        }

        const imageData = canvas.toDataURL("image/png", 1);
        const widthRatio = maxImageWidth / canvas.width;
        const heightRatio = maxImageHeight / canvas.height;
        const imageScale = Math.min(widthRatio, heightRatio);
        const imageWidth = canvas.width * imageScale;
        const imageHeight = canvas.height * imageScale;
        const x = (pageWidth - imageWidth) / 2;
        const y = (pageHeight - imageHeight) / 2;

        if (index > 0) {
          pdf.addPage();
        }

        pdf.setFillColor(245, 247, 251);
        pdf.rect(0, 0, pageWidth, pageHeight, "F");
        pdf.addImage(imageData, "PNG", x, y, imageWidth, imageHeight);
      }

      pdf.save("executive-business-review.pdf");
    } catch (error) {
      console.error("PDF export failed", error);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={exportPdf}
        disabled={isGenerating}
        className="rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600"
      >
        {isGenerating
          ? "Generating PDF..."
          : "Export Executive Business Review (PDF)"}
      </button>
    </div>
  );
}

function createNormalizedSlideClone(slide: HTMLElement) {
  const container = document.createElement("div");
  const clone = slide.cloneNode(true) as HTMLElement;
  const rect = slide.getBoundingClientRect();

  container.setAttribute("aria-hidden", "true");
  container.style.position = "fixed";
  container.style.left = "-100000px";
  container.style.top = "0";
  container.style.width = `${Math.ceil(rect.width)}px`;
  container.style.background = "#f5f7fb";
  container.style.pointerEvents = "none";
  container.style.zIndex = "-1";

  clone.style.width = `${Math.ceil(rect.width)}px`;
  clone.style.minHeight = `${Math.ceil(rect.height)}px`;
  clone.style.height = "auto";
  clone.style.transform = "none";
  clone.style.overflow = "visible";

  container.appendChild(clone);
  normalizeUnsupportedColors(slide, clone);

  return { clone, container };
}

function normalizeUnsupportedColors(sourceRoot: HTMLElement, cloneRoot: HTMLElement) {
  const sourceElements = [
    sourceRoot,
    ...Array.from(sourceRoot.querySelectorAll<HTMLElement>("*")),
  ];
  const cloneElements = [
    cloneRoot,
    ...Array.from(cloneRoot.querySelectorAll<HTMLElement>("*")),
  ];

  for (const [index, sourceElement] of sourceElements.entries()) {
    const cloneElement = cloneElements[index];

    if (!cloneElement) {
      continue;
    }

    const computedStyle = window.getComputedStyle(sourceElement);

    for (const property of COLOR_STYLE_PROPERTIES) {
      const computedValue = computedStyle[property];
      const normalizedValue = normalizeCssColorValue(computedValue);

      cloneElement.style[property] = normalizedValue;
    }

    cloneElement.style.borderColor = normalizeCssColorValue(
      computedStyle.borderColor,
    );
  }
}

function normalizeCssColorValue(value: string) {
  if (!UNSUPPORTED_COLOR_FUNCTION_PATTERN.test(value)) {
    return value;
  }

  return value.replace(
    /\b(oklch|oklab|lch|lab)\(([^()]*)\)/gi,
    (match, colorFunction: string, rawArgs: string) => {
      const convertedColor = convertModernColorToRgb(colorFunction, rawArgs);

      return convertedColor ?? match;
    },
  );
}

function convertModernColorToRgb(colorFunction: string, rawArgs: string) {
  const normalizedFunction = colorFunction.toLowerCase();
  const { components, alpha } = parseColorFunctionArgs(rawArgs);

  if (normalizedFunction === "oklch" && components.length >= 3) {
    return oklchToRgb(
      normalizeLightness(components[0]),
      components[1],
      normalizeHue(components[2]),
      alpha,
    );
  }

  if (normalizedFunction === "oklab" && components.length >= 3) {
    return oklabToRgb(
      normalizeLightness(components[0]),
      components[1],
      components[2],
      alpha,
    );
  }

  if (normalizedFunction === "lch" && components.length >= 3) {
    return labToRgb(
      normalizeLabLightness(components[0]),
      components[1] * Math.cos((normalizeHue(components[2]) * Math.PI) / 180),
      components[1] * Math.sin((normalizeHue(components[2]) * Math.PI) / 180),
      alpha,
    );
  }

  if (normalizedFunction === "lab" && components.length >= 3) {
    return labToRgb(
      normalizeLabLightness(components[0]),
      components[1],
      components[2],
      alpha,
    );
  }

  return null;
}

function parseColorFunctionArgs(rawArgs: string) {
  const [componentPart, alphaPart] = rawArgs.split("/");
  const components = componentPart
    .trim()
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(parseCssNumber);
  const alpha = alphaPart ? clamp(parseCssNumber(alphaPart.trim()), 0, 1) : 1;

  return { components, alpha };
}

function parseCssNumber(value: string) {
  const parsedValue = Number.parseFloat(value);

  if (Number.isNaN(parsedValue)) {
    return 0;
  }

  if (value.endsWith("%")) {
    return parsedValue / 100;
  }

  return parsedValue;
}

function normalizeLightness(value: number) {
  return value > 1 ? value / 100 : value;
}

function normalizeLabLightness(value: number) {
  return value <= 1 ? value * 100 : value;
}

function normalizeHue(value: number) {
  return ((value % 360) + 360) % 360;
}

function oklchToRgb(lightness: number, chroma: number, hue: number, alpha: number) {
  const hueRadians = (hue * Math.PI) / 180;
  const a = chroma * Math.cos(hueRadians);
  const b = chroma * Math.sin(hueRadians);

  return oklabToRgb(lightness, a, b, alpha);
}

function oklabToRgb(lightness: number, a: number, b: number, alpha: number) {
  const lPrime = lightness + 0.3963377774 * a + 0.2158037573 * b;
  const mPrime = lightness - 0.1055613458 * a - 0.0638541728 * b;
  const sPrime = lightness - 0.0894841775 * a - 1.291485548 * b;
  const l = lPrime ** 3;
  const m = mPrime ** 3;
  const s = sPrime ** 3;
  const redLinear = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const greenLinear = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const blueLinear = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

  return rgbString(
    linearSrgbToRgb(redLinear),
    linearSrgbToRgb(greenLinear),
    linearSrgbToRgb(blueLinear),
    alpha,
  );
}

function labToRgb(lightness: number, a: number, b: number, alpha: number) {
  const y = (lightness + 16) / 116;
  const x = a / 500 + y;
  const z = y - b / 200;
  const x3 = x ** 3;
  const y3 = y ** 3;
  const z3 = z ** 3;
  const xr = x3 > 0.008856 ? x3 : (116 * x - 16) / 903.3;
  const yr = y3 > 0.008856 ? y3 : (116 * y - 16) / 903.3;
  const zr = z3 > 0.008856 ? z3 : (116 * z - 16) / 903.3;
  const xD65 = xr * 0.95047;
  const yD65 = yr;
  const zD65 = zr * 1.08883;
  const redLinear = 3.2406 * xD65 - 1.5372 * yD65 - 0.4986 * zD65;
  const greenLinear = -0.9689 * xD65 + 1.8758 * yD65 + 0.0415 * zD65;
  const blueLinear = 0.0557 * xD65 - 0.204 * yD65 + 1.057 * zD65;

  return rgbString(
    linearSrgbToRgb(redLinear),
    linearSrgbToRgb(greenLinear),
    linearSrgbToRgb(blueLinear),
    alpha,
  );
}

function linearSrgbToRgb(value: number) {
  const correctedValue =
    value <= 0.0031308 ? 12.92 * value : 1.055 * value ** (1 / 2.4) - 0.055;

  return Math.round(clamp(correctedValue, 0, 1) * 255);
}

function rgbString(red: number, green: number, blue: number, alpha: number) {
  if (alpha < 1) {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return `rgb(${red}, ${green}, ${blue})`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
