import { getRouteByHref } from "../data/simulator";

const onboardingPhases = [
  {
    phase: "Days 1-10",
    title: "Infrastructure Visibility",
    status: "Ready to start",
    statusTone: "watch",
    summary:
      "Establish baseline visibility across the customer's most critical infrastructure and cloud services.",
    milestones: [
      "Connect production cloud accounts, Kubernetes clusters, and core payment hosts.",
      "Apply service, environment, owner, and business-impact tags to telemetry.",
      "Publish baseline infrastructure health dashboard for checkout and payments.",
    ],
    expectedOutcomes: [
      "SRE teams can see infrastructure saturation before customer impact escalates.",
      "Account team has a defensible baseline for current monitoring coverage.",
    ],
    successMetrics: [
      "90% of critical infrastructure reporting health metrics.",
      "Top 10 payment dependencies mapped to owning teams.",
      "Baseline CPU, memory, latency, and saturation dashboard approved.",
    ],
  },
  {
    phase: "Days 11-20",
    title: "Java APM Instrumentation",
    status: "Planned",
    statusTone: "neutral",
    summary:
      "Instrument high-value Java services so checkout and payment journeys can be traced from request to dependency.",
    milestones: [
      "Deploy Java APM agents to checkout-api, payments-api, orders-api, and loyalty services.",
      "Capture transaction traces, error rates, JVM metrics, and downstream database spans.",
      "Configure service-level views for checkout latency and payment authorization failures.",
    ],
    expectedOutcomes: [
      "Engineering teams can isolate slow spans and dependency bottlenecks quickly.",
      "Incident reviews move from symptoms to trace-backed root cause evidence.",
    ],
    successMetrics: [
      "6 priority Java services instrumented.",
      "P95 checkout transaction trace available within 20 days.",
      "MTTD target reduced from 27 minutes to under 12 minutes.",
    ],
  },
  {
    phase: "Days 21-30",
    title: "Executive Value Review",
    status: "Scheduled",
    statusTone: "good",
    summary:
      "Package the first-value proof into an executive-ready review with outcomes, risks, and next commitments.",
    milestones: [
      "Compare baseline and post-instrumentation visibility for checkout and payments.",
      "Quantify early operational value from faster detection and clearer ownership.",
      "Align sponsor, platform leaders, and account team on the next 60-day roadmap.",
    ],
    expectedOutcomes: [
      "Executive sponsor sees measurable progress within the first 30 days.",
      "Customer agrees on expansion path from infrastructure visibility to journey observability.",
    ],
    successMetrics: [
      "First value readout completed by day 30.",
      "3 executive proof points accepted by sponsor.",
      "Next-phase roadmap approved with named owners.",
    ],
  },
];

const planMetrics = [
  { label: "Time to first value", value: "30 days", detail: "Measured from kickoff to executive readout" },
  { label: "Primary motion", value: "Java APM", detail: "Checkout and payment services first" },
  { label: "Executive checkpoint", value: "Day 30", detail: "Value review and next commitments" },
];

export default function FirstValuePlanPage() {
  const route = getRouteByHref("/first-value-plan");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                30-day onboarding
              </span>
              <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                {route.status}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              First Value Plan
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Drive first value within 30 days by moving from infrastructure
              visibility to Java APM instrumentation and an executive value
              review with measurable outcomes.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[390px]">
            <PlanFact label="Plan owner" value={route.owner} />
            <PlanFact label="Risk posture" value={`${route.risk} risk`} />
            <PlanFact label="Target outcome" value="First value in 30 days" />
            <PlanFact label="Focus area" value="Checkout reliability" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {planMetrics.map((metric) => (
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
        {onboardingPhases.map((phase, index) => (
          <article
            key={phase.title}
            className="flex min-h-[620px] flex-col rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  {phase.phase}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  {phase.title}
                </h3>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-4">
              <span className={statusClass(phase.statusTone)}>
                {phase.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {phase.summary}
            </p>

            <PhaseSection title="Milestones" items={phase.milestones} />
            <PhaseSection
              title="Expected outcomes"
              items={phase.expectedOutcomes}
            />
            <PhaseSection title="Success metrics" items={phase.successMetrics} />
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            First Value Narrative
          </h3>
          <p className="mt-2 leading-7 text-slate-600">{route.summary}</p>
          <div className="mt-5 divide-y divide-slate-100 rounded-md border border-slate-200">
            {route.priorities.map((priority, index) => (
              <div
                key={priority}
                className="flex gap-3 px-4 py-3 text-sm leading-6 text-slate-700"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-semibold text-cyan-800">
                  {index + 1}
                </span>
                <span>{priority}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm">
          <h3 className="text-lg font-semibold">30-Day Exit Criteria</h3>
          <div className="mt-4 space-y-3">
            {[
              "Infrastructure dashboard reviewed with customer technical owners.",
              "Java APM traces available for checkout and payment services.",
              "Executive value review completed with next-phase roadmap approved.",
            ].map((criterion, index) => (
              <div key={criterion} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-400 text-xs font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-200">{criterion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}

function PhaseSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <h4 className="text-sm font-semibold uppercase text-slate-500">
        {title}
      </h4>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="border-l-2 border-cyan-500 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function statusClass(tone: string) {
  const base = "inline-flex rounded-md px-2.5 py-1 text-xs font-semibold";

  if (tone === "good") {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (tone === "watch") {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-slate-100 text-slate-700`;
}
