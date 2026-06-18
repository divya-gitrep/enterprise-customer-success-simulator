"use client";

import { useMemo, useState } from "react";

type ScenarioAction = {
  id: string;
  title: string;
  label: string;
  score: number;
  quality: "Excellent" | "Strong" | "Needs work" | "Poor";
  rationale: string;
  consequence: string;
};

const actions: ScenarioAction[] = [
  {
    id: "segment-diagnose",
    title: "Diagnose usage by segment, workflow, and stakeholder before launching a recovery plan.",
    label: "Evidence-led recovery",
    score: 95,
    quality: "Excellent",
    rationale:
      "This is the best action because a 25% adoption drop needs precise diagnosis before intervention. It identifies where usage fell, which teams or workflows changed, whether product value is blocked, and which executive outcome is now at risk.",
    consequence:
      "The account team can run a targeted adoption recovery plan with clear owners, measurable recovery goals, and executive-ready evidence.",
  },
  {
    id: "generic-training",
    title: "Schedule broad refresher training for all users.",
    label: "Generic enablement",
    score: 58,
    quality: "Needs work",
    rationale:
      "Training may help, but it assumes the problem is user knowledge. Without segment analysis, it can miss deeper issues such as dashboard relevance, team turnover, data gaps, or workflow friction.",
    consequence:
      "The account may see temporary activity, but the root adoption blocker could remain unresolved.",
  },
  {
    id: "executive-escalation",
    title: "Escalate immediately to the executive sponsor and request a renewal-risk meeting.",
    label: "Executive escalation",
    score: 72,
    quality: "Strong",
    rationale:
      "Executive visibility matters, but escalation without diagnosis can create anxiety before the account team understands the cause, impact, and recovery options.",
    consequence:
      "This can secure attention, but it should follow a fast evidence review and a proposed recovery plan.",
  },
  {
    id: "discount-offer",
    title: "Offer a commercial discount to offset declining usage.",
    label: "Commercial concession",
    score: 25,
    quality: "Poor",
    rationale:
      "A discount does not solve adoption. It can weaken value perception and trains the customer to treat usage issues as commercial negotiation points instead of success-plan problems.",
    consequence:
      "The account may retain short-term goodwill while the product value gap and renewal risk continue to grow.",
  },
];

const bestAction = actions[0];

export function ScenarioDecisionEngine() {
  const [selectedActionId, setSelectedActionId] = useState<string | null>(null);
  const [decisionScores, setDecisionScores] = useState<number[]>([]);

  const selectedAction = actions.find((action) => action.id === selectedActionId);
  const latestScore = selectedAction?.score ?? 0;
  const averageScore = useMemo(() => {
    if (decisionScores.length === 0) {
      return 0;
    }

    const total = decisionScores.reduce((sum, score) => sum + score, 0);
    return Math.round(total / decisionScores.length);
  }, [decisionScores]);

  function chooseAction(action: ScenarioAction) {
    setSelectedActionId(action.id);
    setDecisionScores((currentScores) => [...currentScores, action.score]);
  }

  function resetScenario() {
    setSelectedActionId(null);
    setDecisionScores([]);
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
      <section className="space-y-5">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase text-slate-500">
                Scenario
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                Platform adoption dropped 25%
              </h3>
              <p className="mt-2 max-w-3xl leading-7 text-slate-600">
                Two high-value teams are using the platform less frequently,
                dashboard opens are down, and the executive sponsor expects a
                recovery plan before the next value review.
              </p>
            </div>
            <button
              type="button"
              onClick={resetScenario}
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {actions.map((action) => {
            const isSelected = selectedActionId === action.id;
            const isBest = action.id === bestAction.id;

            return (
              <button
                key={action.id}
                type="button"
                onClick={() => chooseAction(action)}
                className={`rounded-md border p-5 text-left shadow-sm transition ${
                  isSelected
                    ? "border-cyan-500 bg-cyan-50"
                    : "border-slate-200 bg-white hover:border-cyan-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500">
                      {action.label}
                    </div>
                    <h4 className="mt-2 font-semibold leading-6 text-slate-950">
                      {action.title}
                    </h4>
                  </div>
                  <span className={qualityBadgeClass(action.quality)}>
                    {action.score}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {action.consequence}
                </p>
                {isBest ? (
                  <div className="mt-4 rounded-md bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-800">
                    Best-practice action
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Why the Best Action Is Correct
          </h3>
          <p className="mt-2 leading-7 text-slate-600">{bestAction.rationale}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              "Segments the adoption drop before prescribing action.",
              "Connects usage behavior to business value and renewal risk.",
              "Creates a measurable recovery plan instead of generic activity.",
            ].map((reason, index) => (
              <div
                key={reason}
                className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-bold text-cyan-800">
                  {index + 1}
                </span>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className="space-y-5">
        <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm">
          <h3 className="text-lg font-semibold">Decision Quality</h3>
          <div className="mt-5 grid gap-3">
            <QualityMetric
              label="Latest score"
              value={selectedAction ? `${latestScore}/100` : "Not selected"}
            />
            <QualityMetric
              label="Average score"
              value={decisionScores.length ? `${averageScore}/100` : "No attempts"}
            />
            <QualityMetric
              label="Attempts"
              value={String(decisionScores.length)}
            />
          </div>
          <div className="mt-5 h-2 rounded-full bg-white/15">
            <div
              className="h-2 rounded-full bg-cyan-400 transition-all"
              style={{ width: `${averageScore}%` }}
            />
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Selection Review
          </h3>
          {selectedAction ? (
            <div className="mt-4">
              <span className={qualityBadgeClass(selectedAction.quality)}>
                {selectedAction.quality}
              </span>
              <h4 className="mt-3 font-semibold leading-6 text-slate-950">
                {selectedAction.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {selectedAction.rationale}
              </p>
            </div>
          ) : (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Select an action to see how the decision is scored and why it is
              or is not the best response.
            </p>
          )}
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Recovery Signals
          </h3>
          <div className="mt-4 space-y-3">
            <Signal label="Active users" value="-25%" tone="risk" />
            <Signal label="Dashboard usage" value="-31%" tone="risk" />
            <Signal label="Executive concern" value="Rising" tone="watch" />
            <Signal label="Recovery window" value="14 days" tone="good" />
          </div>
        </div>
      </aside>
    </div>
  );
}

function QualityMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/10 p-3">
      <div className="text-xs font-medium uppercase text-slate-300">{label}</div>
      <div className="mt-1 font-semibold text-white">{value}</div>
    </div>
  );
}

function Signal({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "good" | "watch" | "risk";
}) {
  return (
    <div className={`rounded-md border px-3 py-2 ${signalClass(tone)}`}>
      <div className="text-xs font-semibold uppercase opacity-80">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function qualityBadgeClass(quality: ScenarioAction["quality"]) {
  const base = "inline-flex rounded-md px-2.5 py-1 text-xs font-semibold";

  if (quality === "Excellent") {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (quality === "Strong") {
    return `${base} bg-cyan-100 text-cyan-800`;
  }

  if (quality === "Needs work") {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-rose-100 text-rose-800`;
}

function signalClass(tone: "good" | "watch" | "risk") {
  if (tone === "good") {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }

  if (tone === "watch") {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }

  return "border-rose-200 bg-rose-50 text-rose-800";
}
