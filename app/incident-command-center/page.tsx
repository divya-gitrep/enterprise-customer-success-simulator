import { getRouteByHref } from "../data/simulator";

const timeline = [
  {
    time: "09:02",
    status: "Detected",
    event: "Checkout latency breach",
    detail:
      "Payment authorization latency crossed the SEV-2 threshold with a rising cart abandonment signal.",
  },
  {
    time: "09:07",
    status: "Triaged",
    event: "Incident commander assigned",
    detail:
      "Response roles assigned across commerce platform, database, SRE, and customer communications.",
  },
  {
    time: "09:16",
    status: "Investigating",
    event: "APM traces isolate checkout API",
    detail:
      "Trace waterfall shows checkout-api waiting on order_summary query for 4.8 seconds at p95.",
  },
  {
    time: "09:29",
    status: "Mitigating",
    event: "Deployment rollback approved",
    detail:
      "Release 2026.06.04.3 rolled back after correlation with query plan regression.",
  },
  {
    time: "09:41",
    status: "Recovered",
    event: "Checkout conversion normalizing",
    detail:
      "Latency returned below target and payment success rate recovered to expected baseline.",
  },
];

const traces = [
  {
    service: "web-checkout",
    operation: "POST /checkout",
    latency: "5.9s p95",
    errors: "12.8%",
    signal: "Customer-facing latency spike",
  },
  {
    service: "checkout-api",
    operation: "createOrder()",
    latency: "5.2s p95",
    errors: "9.4%",
    signal: "Waiting on database response",
  },
  {
    service: "orders-db",
    operation: "order_summary SQL",
    latency: "4.8s p95",
    errors: "0.3%",
    signal: "Slow query plan after deployment",
  },
];

const infrastructureMetrics = [
  { label: "Database CPU", value: "91%", trend: "+38 pts", tone: "risk" },
  { label: "DB connections", value: "842", trend: "+216", tone: "risk" },
  { label: "API saturation", value: "78%", trend: "+24 pts", tone: "watch" },
  { label: "Payment queue depth", value: "12.4K", trend: "+8.1K", tone: "risk" },
];

const deploymentEvents = [
  {
    time: "08:47",
    release: "2026.06.04.3",
    event: "Checkout service deployed",
    detail: "Included order summary enrichment for loyalty offers.",
  },
  {
    time: "08:52",
    release: "2026.06.04.3",
    event: "Database query pattern changed",
    detail: "New join added to checkout order_summary SQL path.",
  },
  {
    time: "09:29",
    release: "rollback-2026.06.04.3",
    event: "Rollback started",
    detail: "Traffic shifted back to prior checkout-api build.",
  },
];

const rootCauseEvidence = [
  "APM trace waterfall showed checkout-api latency concentrated in the order_summary SQL span.",
  "Infrastructure metrics showed elevated database CPU and connection pressure without host failure.",
  "Deployment event correlation matched the latency increase to release 2026.06.04.3.",
  "Rollback restored checkout latency and payment success rate to baseline.",
];

export default function IncidentCommandCenterPage() {
  const route = getRouteByHref("/incident-command-center");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-rose-100 px-2.5 py-1 text-xs font-semibold uppercase text-rose-800">
                Checkout outage
              </span>
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-800">
                Incident response simulator
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Incident Response Simulator
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Coordinate a SEV-2 checkout outage by correlating timeline events,
              APM traces, infrastructure pressure, deployment changes, and root
              cause evidence.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[390px]">
            <IncidentFact label="Severity" value="SEV-2" />
            <IncidentFact label="Incident owner" value={route.owner} />
            <IncidentFact label="Customer impact" value="Checkout degraded" />
            <IncidentFact label="Current state" value="Recovered" />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-4">
        {infrastructureMetrics.map((metric) => (
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
            <div className={metricToneClass(metric.tone)}>{metric.trend}</div>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">Timeline</h3>
          <div className="mt-5 divide-y divide-slate-100 rounded-md border border-slate-200">
            {timeline.map((item) => (
              <div
                key={`${item.time}-${item.event}`}
                className="grid gap-4 p-4 md:grid-cols-[80px_140px_minmax(0,1fr)]"
              >
                <div className="font-semibold text-slate-950">{item.time}</div>
                <div>
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                    {item.status}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-950">
                    {item.event}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Root Cause Analysis</h3>
          <div className="mt-4 rounded-md bg-white/10 p-4">
            <div className="text-xs font-semibold uppercase text-cyan-200">
              Confirmed root cause
            </div>
            <p className="mt-2 text-lg font-semibold leading-7">
              Slow SQL query introduced during deployment.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            {rootCauseEvidence.map((evidence, index) => (
              <div key={evidence} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-400 text-xs font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-200">{evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">APM Traces</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {traces.map((trace) => (
              <article
                key={`${trace.service}-${trace.operation}`}
                className="rounded-md border border-slate-200 bg-slate-50 p-4"
              >
                <div className="text-xs font-semibold uppercase text-slate-500">
                  {trace.service}
                </div>
                <h4 className="mt-2 font-semibold text-slate-950">
                  {trace.operation}
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <TraceStat label="Latency" value={trace.latency} />
                  <TraceStat label="Errors" value={trace.errors} />
                </div>
                <p className="mt-4 border-l-2 border-cyan-500 bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                  {trace.signal}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Deployment Events
          </h3>
          <div className="mt-4 space-y-4">
            {deploymentEvents.map((event) => (
              <div key={`${event.time}-${event.event}`} className="flex gap-3">
                <div className="w-14 shrink-0 text-sm font-semibold text-slate-500">
                  {event.time}
                </div>
                <div className="min-w-0 border-l border-slate-200 pl-4">
                  <div className="font-semibold text-slate-950">
                    {event.event}
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase text-cyan-700">
                    {event.release}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {event.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function IncidentFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}

function TraceStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}

function metricToneClass(tone: string) {
  const base = "mt-2 inline-flex rounded-md px-2 py-1 text-xs font-semibold";

  if (tone === "risk") {
    return `${base} bg-rose-100 text-rose-800`;
  }

  return `${base} bg-amber-100 text-amber-800`;
}
