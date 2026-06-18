import { getRouteByHref } from "../data/simulator";

const currentProducts = [
  {
    name: "Infrastructure Monitoring",
    adoption: "Active",
    coverage: "82%",
    businessValue: "Baseline health for cloud, hosts, containers, and critical payment infrastructure.",
  },
  {
    name: "APM",
    adoption: "Active",
    coverage: "68%",
    businessValue: "Application visibility for checkout, payments, orders, and loyalty services.",
  },
];

const missingProducts = [
  {
    name: "Browser Monitoring",
    fit: "High",
    annualRevenue: 180000,
    businessImpact:
      "Measures real user checkout latency, JavaScript errors, page load experience, and conversion-impacting browser issues.",
    recommendation:
      "Position Browser Monitoring as the executive bridge between application performance and digital revenue protection.",
  },
  {
    name: "Distributed Tracing",
    fit: "Critical",
    annualRevenue: 240000,
    businessImpact:
      "Connects frontend, Java services, payment dependencies, and database spans into end-to-end transaction evidence.",
    recommendation:
      "Package tracing with APM expansion for checkout, payment authorization, and dispute workflows.",
  },
  {
    name: "Mobile Monitoring",
    fit: "Medium",
    annualRevenue: 150000,
    businessImpact:
      "Reveals mobile banking crashes, slow screens, API failures, and customer-impacting login journeys.",
    recommendation:
      "Introduce after browser and tracing value is accepted, using mobile login incidents as the business case.",
  },
];

const totalRevenueOpportunity = missingProducts.reduce(
  (total, product) => total + product.annualRevenue,
  0,
);

const priorityProduct = [...missingProducts].sort(
  (a, b) => b.annualRevenue - a.annualRevenue,
)[0];

export default function ExpansionOpportunitiesPage() {
  const route = getRouteByHref("/expansion-opportunities");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Expansion engine
              </span>
              <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                {route.status}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Expansion Recommendation Engine
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Compare the customer&apos;s current New Relic footprint against
              missing products, then prioritize recommendations by business
              impact and revenue opportunity.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white lg:w-[390px]">
            <div className="text-xs font-semibold uppercase text-cyan-200">
              Total revenue opportunity
            </div>
            <div className="mt-3 text-5xl font-semibold">
              {formatCurrency(totalRevenueOpportunity)}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Highest-priority product: {priorityProduct.name}, with{" "}
              {formatCurrency(priorityProduct.annualRevenue)} in annual
              expansion potential.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <SummaryMetric
          label="Current products"
          value={String(currentProducts.length)}
          detail="Infrastructure Monitoring and APM are active"
        />
        <SummaryMetric
          label="Missing products"
          value={String(missingProducts.length)}
          detail="Browser, tracing, and mobile visibility gaps"
        />
        <SummaryMetric
          label="Expansion ARR"
          value={formatCompactCurrency(totalRevenueOpportunity)}
          detail="Mock annual revenue opportunity"
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[420px_minmax(0,1fr)]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Current Products
          </h3>
          <div className="mt-4 space-y-4">
            {currentProducts.map((product) => (
              <article
                key={product.name}
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-slate-950">
                      {product.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {product.businessValue}
                    </p>
                  </div>
                  <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800">
                    {product.adoption}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Coverage</span>
                    <span className="font-semibold text-slate-950">
                      {product.coverage}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white">
                    <div
                      className="h-2 rounded-full bg-emerald-500"
                      style={{ width: product.coverage }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Recommended Expansion Products
          </h3>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {missingProducts.map((product, index) => (
              <article
                key={product.name}
                className="flex min-h-[360px] flex-col rounded-md border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">
                      Recommendation {index + 1}
                    </div>
                    <h4 className="mt-2 text-lg font-semibold text-slate-950">
                      {product.name}
                    </h4>
                  </div>
                  <span className={fitClass(product.fit)}>{product.fit}</span>
                </div>
                <div className="mt-4 rounded-md bg-white p-3">
                  <div className="text-xs font-medium uppercase text-slate-500">
                    Revenue opportunity
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-slate-950">
                    {formatCurrency(product.annualRevenue)}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-slate-950">
                    Business impact
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {product.businessImpact}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="border-l-2 border-cyan-500 bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                    {product.recommendation}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Business Impact Summary
          </h3>
          <p className="mt-2 leading-7 text-slate-600">{route.summary}</p>
          <div className="mt-5 divide-y divide-slate-100 rounded-md border border-slate-200">
            {missingProducts.map((product, index) => (
              <div
                key={`${product.name}-impact`}
                className="grid gap-3 px-4 py-4 text-sm md:grid-cols-[220px_minmax(0,1fr)_140px]"
              >
                <div className="flex items-center gap-2">
                  <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-bold text-cyan-800">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-950">
                    {product.name}
                  </span>
                </div>
                <div className="leading-6 text-slate-600">
                  {product.businessImpact}
                </div>
                <div className="font-semibold text-slate-950">
                  {formatCurrency(product.annualRevenue)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Expansion Plays</h3>
          <div className="mt-4 space-y-3">
            {route.priorities.map((priority, index) => (
              <div key={priority} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-400 text-xs font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-200">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SummaryMetric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold text-slate-950">{value}</div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </article>
  );
}

function fitClass(fit: string) {
  const base = "rounded-md px-2 py-1 text-xs font-semibold";

  if (fit === "Critical") {
    return `${base} bg-rose-100 text-rose-800`;
  }

  if (fit === "High") {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  return `${base} bg-amber-100 text-amber-800`;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCompactCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    notation: "compact",
  }).format(value);
}
