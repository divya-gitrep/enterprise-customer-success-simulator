import { getRouteByHref } from "../data/simulator";
import { ScenarioDecisionEngine } from "./scenario-decision-engine";

export default function CustomerSuccessScenariosPage() {
  const route = getRouteByHref("/customer-success-scenarios");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Interactive scenario
              </span>
              <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
                {route.status}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Customer Success Scenario Lab
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Practice a customer success decision when platform adoption drops
              sharply, compare four possible actions, and review decision
              quality against the best-practice response.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[390px]">
            <ScenarioFact label="Scenario owner" value={route.owner} />
            <ScenarioFact label="Risk posture" value={`${route.risk} risk`} />
            <ScenarioFact label="Adoption change" value="-25%" />
            <ScenarioFact label="Evaluation" value="Decision quality" />
          </div>
        </div>
      </section>

      <ScenarioDecisionEngine />
    </div>
  );
}

function ScenarioFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}
