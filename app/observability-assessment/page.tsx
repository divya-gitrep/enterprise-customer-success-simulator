import { getRouteByHref } from "../data/simulator";

const maturityCategories = [
  {
    name: "Infrastructure Monitoring",
    score: 78,
    level: "Managed",
    summary:
      "Host, container, and cloud service telemetry is broadly available, but ownership tagging is inconsistent.",
    recommendations: [
      "Standardize service, environment, and business-unit tags across all telemetry.",
      "Create executive views for capacity risk, saturation, and critical dependency health.",
    ],
  },
  {
    name: "APM",
    score: 64,
    level: "Developing",
    summary:
      "Core application metrics exist for major platforms, but critical customer journeys are not fully mapped.",
    recommendations: [
      "Prioritize APM coverage for payment authorization, login, and dispute workflows.",
      "Define service-level objectives for high-value APIs and customer-facing transactions.",
    ],
  },
  {
    name: "Distributed Tracing",
    score: 42,
    level: "Emerging",
    summary:
      "Tracing is partial and does not reliably follow requests across issuer callbacks, gateways, and identity services.",
    recommendations: [
      "Instrument the top cross-service transaction paths with end-to-end trace context.",
      "Use trace exemplars in incident review to shorten root-cause analysis.",
    ],
  },
  {
    name: "Alert Quality",
    score: 51,
    level: "Developing",
    summary:
      "Alerting detects technical symptoms, but duplicate policies and unclear routing slow response coordination.",
    recommendations: [
      "Consolidate duplicate policies and route alerts by service owner and severity.",
      "Tune alerts around customer impact, error budgets, and actionable remediation paths.",
    ],
  },
  {
    name: "Dashboard Adoption",
    score: 69,
    level: "Managed",
    summary:
      "Operational dashboards are used by platform teams, while executive and product adoption remains uneven.",
    recommendations: [
      "Create role-based dashboards for SRE, digital channels, fraud operations, and executives.",
      "Review dashboard usage monthly and archive low-signal views that create confusion.",
    ],
  },
];

const averageScore = Math.round(
  maturityCategories.reduce((total, category) => total + category.score, 0) /
    maturityCategories.length,
);

export default function ObservabilityAssessmentPage() {
  const route = getRouteByHref("/observability-assessment");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Maturity assessment
              </span>
              <span className="rounded-md bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-800">
                {route.risk} risk
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Observability Maturity Assessment
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Assess the customer&apos;s current observability capability across
              monitoring, APM, tracing, alerting, and dashboard adoption, then
              convert gaps into a practical improvement roadmap.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white lg:w-[360px]">
            <div className="text-xs font-semibold uppercase text-cyan-200">
              Current maturity score
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-semibold">{averageScore}</span>
              <span className="pb-2 text-sm font-medium text-slate-300">
                / 100
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/15">
              <div
                className="h-2 rounded-full bg-cyan-400"
                style={{ width: `${averageScore}%` }}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Developing maturity with strong infrastructure coverage and clear
              gaps in tracing, alert quality, and customer journey visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-5">
        {maturityCategories.map((category) => (
          <article
            key={category.name}
            className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  {category.level}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">
                  {category.name}
                </h3>
              </div>
              <span className={scoreBadgeClass(category.score)}>
                {category.score}
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className={scoreBarClass(category.score)}
                style={{ width: `${category.score}%` }}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {category.summary}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Recommendations
          </h3>
          <div className="mt-4 divide-y divide-slate-100 rounded-md border border-slate-200">
            {maturityCategories.map((category) => (
              <div
                key={`${category.name}-recommendations`}
                className="grid gap-4 p-4 md:grid-cols-[220px_minmax(0,1fr)]"
              >
                <div>
                  <div className="font-semibold text-slate-950">
                    {category.name}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Current score: {category.score}
                  </div>
                </div>
                <div className="space-y-2">
                  {category.recommendations.map((recommendation) => (
                    <div
                      key={recommendation}
                      className="border-l-2 border-cyan-500 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700"
                    >
                      {recommendation}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Assessment Summary
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {route.summary}
            </p>
            <div className="mt-4 space-y-3">
              {route.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-md border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="text-sm font-medium text-slate-500">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-xl font-semibold text-slate-950">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-600">{metric.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Next Moves</h3>
            <div className="mt-4 space-y-3">
              {route.priorities.map((priority, index) => (
                <div key={priority} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-bold text-cyan-800">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{priority}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function scoreBadgeClass(score: number) {
  const base =
    "grid size-11 shrink-0 place-items-center rounded-md text-sm font-semibold";

  if (score >= 70) {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (score >= 55) {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-rose-100 text-rose-800`;
}

function scoreBarClass(score: number) {
  const base = "h-2 rounded-full";

  if (score >= 70) {
    return `${base} bg-emerald-500`;
  }

  if (score >= 55) {
    return `${base} bg-amber-500`;
  }

  return `${base} bg-rose-500`;
}
