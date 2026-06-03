import type { SimulatorRoute } from "../data/simulator";

const toneStyles = {
  good: "border-emerald-200 bg-emerald-50 text-emerald-800",
  watch: "border-amber-200 bg-amber-50 text-amber-800",
  risk: "border-rose-200 bg-rose-50 text-rose-800",
};

const riskStyles = {
  Low: "bg-emerald-100 text-emerald-800",
  Medium: "bg-amber-100 text-amber-800",
  High: "bg-rose-100 text-rose-800",
};

export function SimulatorPage({ route }: { route: SimulatorRoute }) {
  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                {route.stage}
              </span>
              <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${riskStyles[route.risk]}`}>
                {route.risk} risk
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              {route.title}
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              {route.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px] lg:grid-cols-1">
            <InfoTile label="Owner" value={route.owner} />
            <InfoTile label="Workflow status" value={route.status} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {route.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-medium text-slate-500">
              {metric.label}
            </div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">
              {metric.value}
            </div>
            <div className="mt-2 text-sm text-slate-600">{metric.detail}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">
                Simulation Brief
              </h3>
              <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                {route.summary}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase text-slate-500">
              Priority actions
            </h4>
            <div className="mt-3 divide-y divide-slate-100 rounded-md border border-slate-200">
              {route.priorities.map((priority, index) => (
                <div
                  key={priority}
                  className="flex gap-3 px-4 py-3 text-sm leading-6 text-slate-700"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md bg-slate-100 text-xs font-semibold text-slate-700">
                    {index + 1}
                  </span>
                  <span>{priority}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Account Signals
            </h3>
            <div className="mt-4 space-y-3">
              {route.signals.map((signal) => (
                <div
                  key={signal.label}
                  className={`rounded-md border px-4 py-3 ${toneStyles[signal.tone]}`}
                >
                  <div className="text-xs font-semibold uppercase opacity-80">
                    {signal.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {signal.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Timeline
            </h3>
            <div className="mt-4 space-y-4">
              {route.timeline.map((item) => (
                <div key={`${item.date}-${item.event}`} className="flex gap-3">
                  <div className="w-14 shrink-0 text-sm font-semibold text-slate-500">
                    {item.date}
                  </div>
                  <div className="min-w-0 border-l border-slate-200 pl-4">
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
        </div>
      </section>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}
