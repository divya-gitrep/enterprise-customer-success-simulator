import Link from "next/link";
import { calculateUnifiedHealthInsight } from "../../data/customer-health-scoring";
import { salesforceSignals } from "../../data/salesforce-signals";
import { slackSignals } from "../../data/slack-signals";
import { stagingUsageSignals } from "../../data/staging-usage-signals";
import { getRouteByHref } from "../data/simulator";

const insight = calculateUnifiedHealthInsight({
  salesforceSignals,
  slackSignals,
  usageSignals: stagingUsageSignals,
});

export default function CustomerIntelligenceHubPage() {
  const route = getRouteByHref("/customer-intelligence-hub");

  return (
    <div className="space-y-5">
      <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold uppercase text-cyan-800">
                Customer Intelligence Hub
              </span>
              <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">
                {route.status}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Customer Intelligence Hub
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-600">
              Demonstrate how Salesforce, Slack, and staging/product usage
              signals could feed the simulator through local mock data sources,
              then combine them into a unified customer health insight.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[390px]">
            <HubFact label="Data posture" value="Mock only" />
            <HubFact label="Real APIs" value="Not connected" />
            <HubFact label="Authentication" value="Not required" />
            <HubFact label="Model owner" value={route.owner} />
          </div>
        </div>
      </section>

      <section className="rounded-md border border-cyan-200 bg-cyan-50 p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-cyan-950">
              Turn these signals into an executive review story
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-cyan-900">
              Generate a TSM briefing that combines intelligence signals,
              account health, value realized, incident history, expansion
              recommendations, and QBR content into a customer-facing CBR/QBR
              narrative.
            </p>
          </div>
          <Link
            href="/executive-review/prepare"
            className="rounded-md bg-[#101828] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Prepare Executive Business Review
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <SourceScore
          label="Salesforce score"
          value={insight.sourceScores.salesforce}
          detail="Commercial, renewal, support, and sponsor signals"
        />
        <SourceScore
          label="Slack score"
          value={insight.sourceScores.slack}
          detail="Sentiment, blockers, response velocity, and champion activity"
        />
        <SourceScore
          label="Usage score"
          value={insight.sourceScores.usage}
          detail="Active users, dashboard usage, services, and release validation"
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        <SignalPanel
          title="Salesforce Signals"
          description="Mock CRM data that could represent renewal, pipeline, support, and sponsor context."
          signals={salesforceSignals}
        />
        <SignalPanel
          title="Slack Signals"
          description="Mock collaboration data that could summarize sentiment, blocker themes, and account team responsiveness."
          signals={slackSignals}
        />
        <SignalPanel
          title="Staging/Product Usage Signals"
          description="Mock usage telemetry that could represent product adoption, dashboard usage, and pre-production validation."
          signals={stagingUsageSignals}
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Unified Customer Health Insight
          </h3>
          <p className="mt-2 leading-7 text-slate-600">{route.summary}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-[240px_minmax(0,1fr)]">
            <div className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white">
              <div className="text-xs font-semibold uppercase text-cyan-200">
                Unified health score
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-semibold">
                  {insight.unifiedHealthScore}
                </span>
                <span className="pb-2 text-sm text-slate-300">/ 100</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/15">
                <div
                  className="h-2 rounded-full bg-cyan-400"
                  style={{ width: `${insight.unifiedHealthScore}%` }}
                />
              </div>
              <div className="mt-4">
                <span className={riskBadgeClass(insight.riskLevel)}>
                  {insight.riskLevel} risk
                </span>
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
              <h4 className="font-semibold text-slate-950">
                Key risk reasons
              </h4>
              <div className="mt-4 space-y-3">
                {insight.keyRiskReasons.map((reason, index) => (
                  <div key={reason} className="flex gap-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-bold text-cyan-800">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-slate-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-950">
            Signal Ingestion Model
          </h3>
          <div className="mt-4 space-y-3">
            <IngestionStep
              label="1. Salesforce mock file"
              value="data/salesforce-signals.ts"
            />
            <IngestionStep
              label="2. Slack mock file"
              value="data/slack-signals.ts"
            />
            <IngestionStep
              label="3. Usage mock file"
              value="data/staging-usage-signals.ts"
            />
            <IngestionStep
              label="4. Scoring utility"
              value="data/customer-health-scoring.ts"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Recommended Action Plan
          </h3>
          <div className="mt-4 rounded-md border border-cyan-200 bg-cyan-50 p-4">
            <div className="text-xs font-semibold uppercase text-cyan-800">
              Recommended TSM action
            </div>
            <p className="mt-2 leading-7 text-cyan-950">
              {insight.recommendedTsmAction}
            </p>
          </div>
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
          <h3 className="text-lg font-semibold">Implementation Guardrails</h3>
          <div className="mt-4 space-y-3">
            {[
              "Use local mock files only; do not connect real Salesforce or Slack APIs yet.",
              "Keep authentication out of scope until integration requirements are defined.",
              "Preserve source-specific scores so TSMs can explain the unified health result.",
            ].map((guardrail, index) => (
              <div key={guardrail} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-400 text-xs font-bold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-sm leading-6 text-slate-200">{guardrail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function HubFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}

function SourceScore({
  label,
  value,
  detail,
}: {
  label: string;
  value: number;
  detail: string;
}) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-medium text-slate-500">{label}</div>
      <div className="mt-3 text-3xl font-semibold text-slate-950">
        {value}
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-100">
        <div className={scoreBarClass(value)} style={{ width: `${value}%` }} />
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </article>
  );
}

function SignalPanel({
  title,
  description,
  signals,
}: {
  title: string;
  description: string;
  signals: {
    label: string;
    value: string;
    score: number;
    trend: "positive" | "watch" | "risk";
    detail: string;
  }[];
}) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-4 space-y-3">
        {signals.map((signal) => (
          <div
            key={signal.label}
            className="rounded-md border border-slate-200 bg-slate-50 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold text-slate-950">
                  {signal.label}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {signal.value}
                </div>
              </div>
              <span className={trendBadgeClass(signal.trend)}>
                {signal.score}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {signal.detail}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function IngestionStep({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
      <div className="text-sm font-semibold text-slate-950">{label}</div>
      <div className="mt-1 font-mono text-xs text-slate-600">{value}</div>
    </div>
  );
}

function scoreBarClass(score: number) {
  if (score >= 80) {
    return "h-2 rounded-full bg-emerald-500";
  }

  if (score >= 65) {
    return "h-2 rounded-full bg-amber-500";
  }

  return "h-2 rounded-full bg-rose-500";
}

function trendBadgeClass(trend: "positive" | "watch" | "risk") {
  const base = "rounded-md px-2 py-1 text-xs font-semibold";

  if (trend === "positive") {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (trend === "watch") {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-rose-100 text-rose-800`;
}

function riskBadgeClass(riskLevel: "Low" | "Medium" | "High") {
  const base = "inline-flex rounded-md px-2.5 py-1 text-xs font-semibold";

  if (riskLevel === "Low") {
    return `${base} bg-emerald-100 text-emerald-800`;
  }

  if (riskLevel === "Medium") {
    return `${base} bg-amber-100 text-amber-800`;
  }

  return `${base} bg-rose-100 text-rose-800`;
}
