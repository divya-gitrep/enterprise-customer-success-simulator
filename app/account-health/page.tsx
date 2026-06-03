import { getRouteByHref } from "../data/simulator";

const healthInputs = [
  {
    label: "Active Users",
    value: 418,
    target: 520,
    unit: "users",
    weight: 25,
    recommendation:
      "Run a role-based activation campaign for fraud operations and digital channels teams.",
  },
  {
    label: "Dashboard Usage",
    value: 74,
    target: 90,
    unit: "%",
    weight: 20,
    recommendation:
      "Create executive and product dashboards tied to business outcomes, not only platform health.",
  },
  {
    label: "Instrumented Services",
    value: 61,
    target: 85,
    unit: "%",
    weight: 25,
    recommendation:
      "Prioritize instrumentation for payment authorization, login, and dispute workflows.",
  },
  {
    label: "Alert Adoption",
    value: 68,
    target: 90,
    unit: "%",
    weight: 15,
    recommendation:
      "Consolidate duplicate alert policies and route alerts by service owner and severity.",
  },
  {
    label: "Executive Engagement",
    value: 82,
    target: 100,
    unit: "%",
    weight: 15,
    recommendation:
      "Schedule monthly sponsor check-ins with a value scorecard and decision log.",
  },
];

const scoredInputs = healthInputs.map((input) => {
  const attainment = Math.min(input.value / input.target, 1);
  const score = Math.round(attainment * 100);

  return {
    ...input,
    score,
    weightedScore: Math.round(attainment * input.weight),
  };
});

const healthScore = scoredInputs.reduce(
  (total, input) => total + input.weightedScore,
  0,
);

const riskLevel =
  healthScore >= 80 ? "Low" : healthScore >= 65 ? "Medium" : "High";

const priorityRecommendations = [...scoredInputs]
  .sort((a, b) => a.score - b.score)
  .slice(0, 3);

export default function AccountHealthPage() {
  const route = getRouteByHref("/account-health");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Score engine
              </span>
              <span className={riskBadgeClass(riskLevel)}>
                {riskLevel} risk
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Account Health Score Engine
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Combine product adoption, instrumentation progress, alerting
              maturity, and sponsor engagement into a clear customer health
              score with action-oriented recommendations.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white lg:w-[360px]">
            <div className="text-xs font-semibold uppercase text-cyan-200">
              Health score
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-semibold">{healthScore}</span>
              <span className="pb-2 text-sm font-medium text-slate-300">
                / 100
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/15">
              <div
                className={overallBarClass()}
                style={{ width: `${healthScore}%` }}
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              {route.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-5">
        {scoredInputs.map((input) => (
          <article
            key={input.label}
            className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  Weight {input.weight}%
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">
                  {input.label}
                </h3>
              </div>
              <span className={inputScoreBadgeClass(input.score)}>
                {input.score}
              </span>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-slate-950">
                {input.value}
              </span>
              <span className="text-sm text-slate-500">
                {input.unit} / target {formatTarget(input.target, input.unit)}
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className={inputScoreBarClass(input.score)}
                style={{ width: `${input.score}%` }}
              />
            </div>
            <div className="mt-3 text-sm text-slate-600">
              Weighted contribution:{" "}
              <span className="font-semibold text-slate-950">
                {input.weightedScore}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Recommendations
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Recommendations are prioritized from the lowest input attainment so
            the account team can focus on the factors most likely to move the
            health score.
          </p>
          <div className="mt-4 divide-y divide-slate-100 rounded-md border border-slate-200">
            {priorityRecommendations.map((input, index) => (
              <div
                key={`${input.label}-recommendation`}
                className="grid gap-4 p-4 md:grid-cols-[220px_minmax(0,1fr)]"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 place-items-center rounded-md bg-cyan-100 text-xs font-bold text-cyan-800">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-slate-950">
                      {input.label}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    Current score: {input.score}
                  </div>
                </div>
                <div className="border-l-2 border-cyan-500 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700">
                  {input.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Risk Level
            </h3>
            <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-medium text-slate-500">
                Calculated posture
              </div>
              <div className="mt-2 text-3xl font-semibold text-slate-950">
                {riskLevel}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Scores of 80 or higher are low risk, 65-79 are medium risk, and
                below 65 are high risk.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">
              Account Context
            </h3>
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
        </div>
      </section>
    </div>
  );
}

function riskBadgeClass(risk: string) {
  const base = "rounded-md px-2.5 py-1 text-xs font-semibold";

  if (risk === "Low") {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (risk === "Medium") {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-rose-100 text-rose-800`;
}

function inputScoreBadgeClass(score: number) {
  const base =
    "grid size-11 shrink-0 place-items-center rounded-md text-sm font-semibold";

  if (score >= 80) {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (score >= 65) {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-rose-100 text-rose-800`;
}

function inputScoreBarClass(score: number) {
  const base = "h-2 rounded-full";

  if (score >= 80) {
    return `${base} bg-emerald-500`;
  }

  if (score >= 65) {
    return `${base} bg-amber-500`;
  }

  return `${base} bg-rose-500`;
}

function overallBarClass() {
  return "h-2 rounded-full bg-cyan-400";
}

function formatTarget(target: number, unit: string) {
  return unit === "%" ? `${target}%` : `${target} ${unit}`;
}
