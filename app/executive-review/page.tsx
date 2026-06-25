import Link from "next/link";
import { getRouteByHref } from "../data/simulator";

const qbrSections = [
  {
    title: "Objectives",
    eyebrow: "Quarter intent",
    items: [
      "Protect digital revenue by improving checkout, payments, and mobile login reliability.",
      "Establish executive-ready value proof for renewal and expansion decisions.",
      "Move from infrastructure visibility to customer journey observability.",
    ],
  },
  {
    title: "Achievements",
    eyebrow: "Delivered this quarter",
    items: [
      "Launched 30-day first value plan across infrastructure visibility and Java APM.",
      "Reduced MTTR from 90 minutes to 18 minutes in the executive value model.",
      "Completed checkout outage simulation with trace-backed root cause analysis.",
    ],
  },
  {
    title: "Business Outcomes",
    eyebrow: "Measured impact",
    items: [
      "$29.7M modeled annual savings from avoided downtime and faster recovery.",
      "Incident volume reduced from 12 per month to 5 per month in target workflows.",
      "SLA improved from 97% to 99.9%, strengthening the renewal narrative.",
    ],
  },
  {
    title: "Risks",
    eyebrow: "Board attention",
    items: [
      "Distributed tracing remains a gap for full checkout-to-database transaction evidence.",
      "Dashboard adoption is uneven outside platform and SRE teams.",
      "Mobile experience visibility is limited for login and high-value banking journeys.",
    ],
  },
  {
    title: "Recommendations",
    eyebrow: "Decisions requested",
    items: [
      "Approve Distributed Tracing expansion as the highest-priority technical control.",
      "Fund Browser Monitoring to connect digital experience signals to conversion impact.",
      "Set a monthly executive value review cadence through renewal planning.",
    ],
  },
  {
    title: "Next Quarter Plan",
    eyebrow: "Q+1 execution",
    items: [
      "Instrument end-to-end checkout and payment authorization traces.",
      "Launch executive, product, and operations dashboards tied to business outcomes.",
      "Prepare expansion business case for Browser Monitoring and Mobile Monitoring.",
    ],
  },
];

const boardMetrics = [
  { label: "Annual savings", value: "$29.7M", detail: "Modeled avoided downtime" },
  { label: "MTTR improvement", value: "80%", detail: "90 min to 18 min" },
  { label: "SLA outcome", value: "99.9%", detail: "Improved from 97%" },
  { label: "Expansion pipeline", value: "$570K", detail: "Recommended ARR opportunity" },
];

const nextQuarterMilestones = [
  {
    month: "Month 1",
    focus: "Trace critical journeys",
    outcome: "Checkout and payment authorization spans visible end to end.",
  },
  {
    month: "Month 2",
    focus: "Adopt executive dashboards",
    outcome: "Sponsor, product, and operations leaders review shared value scorecard.",
  },
  {
    month: "Month 3",
    focus: "Approve expansion motion",
    outcome: "Commercial path aligned for Browser and Mobile Monitoring.",
  },
];

export default function ExecutiveReviewPage() {
  const route = getRouteByHref("/executive-review");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm sm:p-6">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-400 px-2.5 py-1 text-xs font-semibold uppercase text-slate-950">
                Board-ready QBR
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
                {route.status}
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Executive Quarterly Business Review
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200">
              A board-ready summary of objectives, achievements, business
              outcomes, risks, recommendations, and next-quarter execution
              priorities for the customer success program.
            </p>
            <div className="mt-5">
              <Link
                href="/executive-review/prepare"
                className="inline-flex rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Prepare Executive Business Review
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:w-[420px]">
            <ExecutiveFact label="Executive owner" value={route.owner} />
            <ExecutiveFact label="Risk posture" value={`${route.risk} risk`} />
            <ExecutiveFact label="Review audience" value="Board and C-suite" />
            <ExecutiveFact label="Decision focus" value="Renewal and expansion" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {boardMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-medium text-slate-500">
              {metric.label}
            </div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">
              {metric.value}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {metric.detail}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {qbrSections.map((section, index) => (
          <article
            key={section.title}
            className="flex min-h-[360px] flex-col rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  {section.eyebrow}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {section.title}
                </h3>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="border-l-2 border-cyan-500 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Next Quarter Plan
          </h3>
          <div className="mt-5 overflow-hidden rounded-md border border-slate-200">
            <div className="grid grid-cols-[110px_minmax(0,1fr)] bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 md:grid-cols-[120px_220px_minmax(0,1fr)]">
              <div>Period</div>
              <div className="hidden md:block">Focus</div>
              <div>Outcome</div>
            </div>
            <div className="divide-y divide-slate-100">
              {nextQuarterMilestones.map((milestone) => (
                <div
                  key={milestone.month}
                  className="grid grid-cols-[110px_minmax(0,1fr)] gap-3 px-4 py-4 text-sm md:grid-cols-[120px_220px_minmax(0,1fr)]"
                >
                  <div className="font-semibold text-slate-950">
                    {milestone.month}
                  </div>
                  <div className="font-medium text-cyan-800 md:text-slate-950">
                    {milestone.focus}
                  </div>
                  <div className="col-span-2 leading-6 text-slate-600 md:col-span-1">
                    {milestone.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Executive Narrative
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {route.summary}
          </p>
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
      </section>
    </div>
  );
}

function ExecutiveFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/10 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-300">{label}</div>
      <div className="mt-1 font-semibold text-white">{value}</div>
    </div>
  );
}
