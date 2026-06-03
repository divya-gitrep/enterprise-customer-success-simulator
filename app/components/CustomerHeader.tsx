import { customer } from "../data/simulator";

export function CustomerHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase text-slate-500">
            Enterprise Customer Success Simulator
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h1 className="text-2xl font-semibold text-slate-950">
              {customer.name}
            </h1>
            <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
              {customer.plan}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-600">
            {customer.segment} · {customer.team}
          </p>
        </div>
        <div className="grid gap-3 text-sm sm:grid-cols-3 xl:min-w-[560px]">
          <HeaderStat label="ARR" value={customer.arr} />
          <HeaderStat label="Renewal" value={customer.renewal.replace("Renewal: ", "")} />
          <HeaderStat label="Executive sponsor" value={customer.executiveSponsor} />
        </div>
      </div>
    </header>
  );
}

function HeaderStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-1 truncate font-semibold text-slate-900">{value}</div>
    </div>
  );
}
