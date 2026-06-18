import { getRouteByHref } from "../data/simulator";

const beforeMetrics = {
  label: "Before New Relic",
  mttrMinutes: 90,
  incidentsPerMonth: 12,
  sla: 97,
};

const afterMetrics = {
  label: "After New Relic",
  mttrMinutes: 18,
  incidentsPerMonth: 5,
  sla: 99.9,
};

const businessImpactPerMinute = 2500;
const beforeDowntimeMinutesPerMonth =
  beforeMetrics.mttrMinutes * beforeMetrics.incidentsPerMonth;
const afterDowntimeMinutesPerMonth =
  afterMetrics.mttrMinutes * afterMetrics.incidentsPerMonth;
const avoidedMinutesPerMonth =
  beforeDowntimeMinutesPerMonth - afterDowntimeMinutesPerMonth;
const annualAvoidedMinutes = avoidedMinutesPerMonth * 12;
const annualSavings = annualAvoidedMinutes * businessImpactPerMinute;

const comparisonRows = [
  {
    metric: "MTTR",
    before: `${beforeMetrics.mttrMinutes} min`,
    after: `${afterMetrics.mttrMinutes} min`,
    improvement: "80% faster recovery",
  },
  {
    metric: "Incidents",
    before: `${beforeMetrics.incidentsPerMonth}/month`,
    after: `${afterMetrics.incidentsPerMonth}/month`,
    improvement: "58% fewer incidents",
  },
  {
    metric: "SLA",
    before: `${beforeMetrics.sla}%`,
    after: `${afterMetrics.sla}%`,
    improvement: "+2.9 percentage points",
  },
];

const executiveInsights = [
  "Checkout and payment teams recover faster because traces connect customer impact to service ownership.",
  "Incident volume is lower after alert tuning, dashboard adoption, and Java APM instrumentation.",
  "SLA improvement strengthens the renewal narrative for executive sponsors and procurement reviewers.",
];

export default function BusinessValueDashboardPage() {
  const route = getRouteByHref("/business-value-dashboard");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Executive value dashboard
              </span>
              <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                {route.status}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Business Value Dashboard
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Compare operational performance before and after New Relic, then
              translate incident reduction and faster recovery into an
              executive-ready annual savings estimate.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white lg:w-[390px]">
            <div className="text-xs font-semibold uppercase text-cyan-200">
              Calculated annual savings
            </div>
            <div className="mt-3 text-5xl font-semibold">
              {formatCurrency(annualSavings)}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Based on {annualAvoidedMinutes.toLocaleString()} avoided outage
              minutes annually at {formatCurrency(businessImpactPerMinute)} per
              minute of business impact.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <ValueMetric
          label="MTTR reduction"
          value="80%"
          detail="90 minutes down to 18 minutes"
        />
        <ValueMetric
          label="Incident reduction"
          value="58%"
          detail="12 incidents/month down to 5"
        />
        <ValueMetric
          label="SLA improvement"
          value="99.9%"
          detail="Improved from 97% baseline"
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Before vs. After New Relic
          </h3>
          <div className="mt-5 overflow-hidden rounded-md border border-slate-200">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 md:grid-cols-[1fr_1fr_1fr_1.2fr]">
              <div>Metric</div>
              <div>Before</div>
              <div>After</div>
              <div className="hidden md:block">Improvement</div>
            </div>
            <div className="divide-y divide-slate-100 bg-white">
              {comparisonRows.map((row) => (
                <div
                  key={row.metric}
                  className="grid grid-cols-[1fr_1fr_1fr] gap-3 px-4 py-4 text-sm md:grid-cols-[1fr_1fr_1fr_1.2fr]"
                >
                  <div className="font-semibold text-slate-950">
                    {row.metric}
                  </div>
                  <div className="text-rose-700">{row.before}</div>
                  <div className="text-emerald-700">{row.after}</div>
                  <div className="col-span-3 rounded-md bg-cyan-50 px-3 py-2 font-medium text-cyan-800 md:col-span-1 md:bg-transparent md:px-0 md:py-0">
                    {row.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Savings Formula
          </h3>
          <div className="mt-4 space-y-3">
            <FormulaLine
              label="Before downtime"
              value={`${beforeDowntimeMinutesPerMonth.toLocaleString()} min/month`}
            />
            <FormulaLine
              label="After downtime"
              value={`${afterDowntimeMinutesPerMonth.toLocaleString()} min/month`}
            />
            <FormulaLine
              label="Avoided downtime"
              value={`${avoidedMinutesPerMonth.toLocaleString()} min/month`}
            />
            <FormulaLine
              label="Annual avoided minutes"
              value={annualAvoidedMinutes.toLocaleString()}
            />
            <FormulaLine
              label="Impact assumption"
              value={`${formatCurrency(businessImpactPerMinute)}/min`}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Executive Interpretation
          </h3>
          <p className="mt-2 leading-7 text-slate-600">{route.summary}</p>
          <div className="mt-5 divide-y divide-slate-100 rounded-md border border-slate-200">
            {executiveInsights.map((insight, index) => (
              <div
                key={insight}
                className="flex gap-3 px-4 py-3 text-sm leading-6 text-slate-700"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-semibold text-cyan-800">
                  {index + 1}
                </span>
                <span>{insight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Value Story</h3>
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

function ValueMetric({
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

function FormulaLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-slate-950">{value}</span>
    </div>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
