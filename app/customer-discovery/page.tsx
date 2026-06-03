import { getRouteByHref } from "../data/simulator";

const workshopSections = [
  {
    title: "Business Goals",
    kicker: "Outcome alignment",
    summary:
      "Clarify the commercial and operational outcomes the customer expects from the success motion.",
    items: [
      "Protect digital transaction revenue during peak banking windows.",
      "Reduce escalations between payments, SRE, and digital channels teams.",
      "Create a renewal narrative tied to measurable reliability gains.",
    ],
  },
  {
    title: "Technical Challenges",
    kicker: "Current state",
    summary:
      "Surface the platform constraints that prevent teams from detecting, triaging, and resolving customer-impacting issues.",
    items: [
      "Incomplete tracing across payment authorization and issuer callback paths.",
      "Alert policies create duplicate noise without clear ownership metadata.",
      "Customer journey visibility is split across dashboards, logs, and support queues.",
    ],
  },
  {
    title: "Executive Concerns",
    kicker: "Leadership agenda",
    summary:
      "Document the risks and decision criteria executives will use to judge program success.",
    items: [
      "Customer trust impact from mobile login and payment degradation.",
      "Board-level pressure to show operational resilience improvements.",
      "Procurement scrutiny around cost, adoption, and time to first value.",
    ],
  },
  {
    title: "Success Metrics",
    kicker: "Measurement model",
    summary:
      "Define the quantitative proof points that will anchor the first value plan and executive review.",
    items: [
      "Reduce MTTD for payment incidents from 27 minutes to under 8 minutes.",
      "Increase critical service observability coverage from 61% to 85%.",
      "Show quarterly incident cost avoidance and support escalation reduction.",
    ],
  },
];

export default function CustomerDiscoveryPage() {
  const route = getRouteByHref("/customer-discovery");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Discovery workshop
              </span>
              <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
                {route.status}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Customer Discovery Workshop
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Facilitate a structured consulting conversation that connects
              executive priorities, technical constraints, and measurable first
              value outcomes.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[390px]">
            <WorkshopFact label="Workshop owner" value={route.owner} />
            <WorkshopFact label="Risk posture" value={`${route.risk} risk`} />
            <WorkshopFact label="Stakeholders" value="14 mapped" />
            <WorkshopFact label="Next step" value="Assessment scope" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        {workshopSections.map((section, index) => (
          <article
            key={section.title}
            className="flex min-h-[360px] flex-col rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  {section.kicker}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {section.title}
                </h3>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {section.summary}
            </p>
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
            Workshop Output
          </h3>
          <p className="mt-2 leading-7 text-slate-600">{route.summary}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {route.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-sm font-medium text-slate-500">
                  {metric.label}
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Facilitator Focus</h3>
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

function WorkshopFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}
