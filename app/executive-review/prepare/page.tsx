import { calculateUnifiedHealthInsight } from "../../../data/customer-health-scoring";
import { salesforceSignals } from "../../../data/salesforce-signals";
import { slackSignals } from "../../../data/slack-signals";
import { stagingUsageSignals } from "../../../data/staging-usage-signals";
import { customer } from "../../data/simulator";
import { BriefingActions } from "./briefing-actions";

const insight = calculateUnifiedHealthInsight({
  salesforceSignals,
  slackSignals,
  usageSignals: stagingUsageSignals,
});

const generatedFrom = [
  "Salesforce signals",
  "Slack signals",
  "Product usage signals",
  "Account health",
  "Incident history",
  "Business value metrics",
  "Expansion recommendations",
];

const keyMessages = [
  {
    headline: "Value is credible and executive-ready",
    detail:
      "$29.7M in modeled annual value gives the TSM a board-level business case anchored in faster recovery, fewer incidents, and SLA improvement.",
  },
  {
    headline: "The renewal risk is about proof, not interest",
    detail:
      "Sponsor engagement is strong, but procurement and product leaders still need clearer adoption recovery, instrumentation coverage, and value attribution.",
  },
  {
    headline: "The customer conversation should drive commitment",
    detail:
      "Use the QBR to align executives on a 30/60/90 plan that pairs adoption recovery with Distributed Tracing and Browser Monitoring expansion.",
  },
];

const goalsProgress = [
  {
    goal: "Reliability",
    progress: "99.9% SLA and 80% faster MTTR show measurable progress against digital reliability goals.",
    status: "On track",
    evidence: "MTTR reduced from 90 minutes to 18 minutes.",
  },
  {
    goal: "Adoption",
    progress: "418 monthly active users is healthy, but Slack blockers and dashboard usage gaps indicate uneven value realization.",
    status: "Watch",
    evidence: "Dashboard usage at 74%; adoption blockers remain visible in Slack.",
  },
  {
    goal: "Incident response",
    progress: "Checkout outage simulation connected APM traces, deployment events, infrastructure pressure, and root cause evidence.",
    status: "Improving",
    evidence: "Slow SQL query root cause identified from trace and deployment correlation.",
  },
  {
    goal: "Executive visibility",
    progress: "Sponsor engagement is strong, and the QBR narrative can connect technical work to business outcomes.",
    status: "Strong",
    evidence: "Executive sponsor requested a QBR follow-up after value review.",
  },
];

const valueRealized = [
  {
    label: "MTTR improvement",
    value: "80%",
    comparison: "90 min to 18 min",
    meaning: "Faster recovery",
    explanation:
      "Teams can restore checkout and payment experiences before incidents become prolonged executive escalations.",
  },
  {
    label: "Incident reduction",
    value: "58%",
    comparison: "12/month to 5/month",
    meaning: "Lower operational drag",
    explanation:
      "Fewer recurring incidents means less engineering interruption and a stronger customer trust story.",
  },
  {
    label: "SLA improvement",
    value: "99.9%",
    comparison: "Improved from 97%",
    meaning: "Reliability credibility",
    explanation:
      "The improved SLA gives executives a clean way to connect platform work to digital business resilience.",
  },
  {
    label: "Annual value estimate",
    value: "$29.7M",
    comparison: "Modeled avoided downtime",
    meaning: "Business value proof",
    explanation:
      "The QBR can quantify value in language finance, procurement, and executive sponsors understand.",
  },
];

const riskMatrix = [
  {
    risk: "Adoption decline",
    severity: "High",
    evidence: "Slack blocker themes, mixed sentiment, and dashboard usage at 74%.",
    impact:
      "If teams do not embed observability into daily work, renewal proof weakens even when platform value exists.",
    response:
      "Run role-based adoption workshops and track recovery by team, workflow, and dashboard usage.",
  },
  {
    risk: "Support escalation noise",
    severity: "Medium",
    evidence: "Two active Salesforce-style support escalations remain open.",
    impact:
      "Unresolved issues can dominate the executive discussion and distract from the value narrative.",
    response:
      "Create an escalation closure plan with named owners before the executive review.",
  },
  {
    risk: "Renewal value validation",
    severity: "Medium",
    evidence: "Renewal stage is value validation with procurement asking for clearer outcomes.",
    impact:
      "Procurement may view the platform as a cost center unless business value is packaged clearly.",
    response:
      "Lead with value realized, then ask the sponsor to confirm the renewal decision criteria.",
  },
  {
    risk: "Instrumentation gaps",
    severity: "High",
    evidence: "Instrumented services at 61%; tracing and browser journeys remain incomplete.",
    impact:
      "Critical incidents can still lack end-to-end customer journey evidence.",
    response:
      "Prioritize Distributed Tracing for checkout and Browser Monitoring for customer experience visibility.",
  },
];

const actionPlan = [
  {
    period: "30 days",
    theme: "Stabilize and align",
    owner: "TSM + executive sponsor",
    actions: [
      "Validate the executive value narrative and renewal decision criteria.",
      "Close active escalation owners and dates.",
      "Define adoption recovery targets by team.",
    ],
    outcome:
      "Executives agree on the business story, open risks, and near-term recovery plan.",
  },
  {
    period: "60 days",
    theme: "Expand adoption",
    owner: "TSM + SRE and product leaders",
    actions: [
      "Run role-based dashboard and workflow adoption workshops.",
      "Launch executive and product value dashboards.",
      "Increase instrumentation coverage for critical services.",
    ],
    outcome:
      "Usage becomes broader, more role-specific, and easier to defend in renewal conversations.",
  },
  {
    period: "90 days",
    theme: "Prove value and renew",
    owner: "TSM + account team",
    actions: [
      "Package adoption recovery, incident reduction, and SLA gains.",
      "Secure expansion agreement for tracing or browser visibility.",
      "Run a follow-up executive value review.",
    ],
    outcome:
      "Renewal confidence improves and expansion is tied to customer outcomes, not product features.",
  },
];

const discussionQuestions = [
  "Which business outcomes should this QBR prove most clearly for your executive team?",
  "Where is platform adoption strongest today, and which teams still need help embedding observability into daily work?",
  "Which operational gaps create the greatest customer experience or revenue risk over the next quarter?",
  "What would make Browser Monitoring or Distributed Tracing compelling as the next expansion motion?",
  "What decision do you need from this review to keep renewal and value realization on track?",
];

const intelligenceRows = [
  {
    source: "Salesforce-style signals",
    signal: "Renewal in value validation, $570K expansion qualified, 2 support escalations active.",
    meaning:
      "Commercial momentum exists, but the TSM should make the value story specific enough for procurement and the executive sponsor.",
  },
  {
    source: "Slack-style signals",
    signal: "Mixed sentiment, 4 adoption blocker themes, champion activity high.",
    meaning:
      "The account has internal advocates, but the QBR should acknowledge practical blockers instead of presenting adoption as uniformly healthy.",
  },
  {
    source: "Usage/staging signals",
    signal: "418 monthly active users, 74% dashboard usage, 61% instrumented services.",
    meaning:
      "Usage is real, but incomplete instrumentation and executive dashboard adoption limit the customer-facing value narrative.",
  },
];

export default function PrepareExecutiveBusinessReviewPage() {
  return (
    <div className="ebr-deck space-y-6">
      <section className="rounded-md border border-slate-200 bg-[#101828] p-5 text-white shadow-sm sm:p-6">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-cyan-400 px-2.5 py-1 text-xs font-semibold uppercase text-slate-950">
                Prepare Executive Business Review
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
                TSM briefing assistant
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Customer-facing CBR/QBR Story Preview
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-200">
              A premium briefing preview that turns fragmented customer
              intelligence into an executive-ready customer success story.
            </p>
          </div>
          <BriefingActions />
        </div>
        <SourceBadges className="mt-6" />
      </section>

      <CoverSlide />

      <BriefingSlide
        number="01"
        title="Key Messages for the TSM"
        subtitle="The executive conversation should be anchored in value, risk, and clear next commitments."
        insight="The TSM should not present dashboard activity; they should frame a business outcome story with a specific ask."
        recommendation="Open the review with value delivered, then move quickly to adoption and instrumentation decisions."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {keyMessages.map((message, index) => (
            <MessageCard
              key={message.headline}
              index={index + 1}
              headline={message.headline}
              text={message.detail}
            />
          ))}
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="02"
        title="Executive Summary"
        subtitle="Account posture and narrative for the executive review."
        insight="Value proof is strong, but renewal confidence depends on resolving adoption blockers, escalations, and instrumentation gaps."
        recommendation="Use the QBR to confirm renewal decision criteria and secure executive sponsorship for the next 90 days."
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-5">
            <h4 className="text-lg font-semibold text-slate-950">
              Narrative summary
            </h4>
            <p className="mt-3 text-base leading-7 text-slate-700">
              {customer.name} has progressed from operational visibility toward
              measurable business value. The account has a credible value story
              built on incident reduction, faster recovery, and improved SLA
              performance. The next executive conversation should convert that
              proof into renewal confidence and outcome-tied expansion.
            </p>
          </div>
          <div className="grid gap-3">
            <BriefingFact label="Customer" value={customer.name} />
            <BriefingFact label="Health score" value={`${insight.unifiedHealthScore}/100`} />
            <BriefingFact label="Renewal timeline" value={customer.renewal.replace("Renewal: ", "")} />
            <BriefingFact label="ARR" value={customer.arr} />
            <BriefingFact label="Overall status" value={`${insight.riskLevel} risk, value validation`} />
          </div>
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="03"
        title="Customer Goals vs Progress"
        subtitle="Discovery goals translated into measurable executive progress."
        insight="Reliability and executive visibility are strong; adoption and instrumentation need the next wave of TSM attention."
        recommendation="Ask the customer to confirm whether these are still the right goals for the next quarter."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {goalsProgress.map((goal) => (
            <article
              key={goal.goal}
              className="rounded-md border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-semibold text-slate-950">{goal.goal}</h4>
                <StatusBadge label={goal.status} />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {goal.progress}
              </p>
              <div className="mt-4 rounded-md border border-cyan-100 bg-cyan-50 p-3 text-xs leading-5 text-cyan-950">
                {goal.evidence}
              </div>
            </article>
          ))}
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="04"
        title="Intelligence Signals"
        subtitle="Commercial, engagement, and product usage signals synthesized into account meaning."
        insight="The signals do not point to a failing account; they point to a customer that needs a sharper value proof and targeted adoption recovery."
        recommendation="Translate each signal into what the customer should decide, fund, or unblock."
      >
        <div className="space-y-4">
          {intelligenceRows.map((row) => (
            <div
              key={row.source}
              className="grid gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 lg:grid-cols-[220px_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <div>
                <SourceChip label={row.source} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase text-slate-500">
                  Signal observed
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {row.signal}
                </p>
              </div>
              <div className="border-l-2 border-cyan-500 bg-white px-3 py-2">
                <div className="text-xs font-semibold uppercase text-cyan-800">
                  Executive meaning
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {row.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="05"
        title="Value Realized"
        subtitle="Business outcomes translated into executive language."
        insight="$29.7M modeled annual value gives the TSM a credible financial anchor for renewal and expansion."
        recommendation="Lead this slide as the proof point: New Relic helped reduce operational risk and protect digital customer experience."
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {valueRealized.map((value) => (
            <article
              key={value.label}
              className="rounded-md border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm"
            >
              <div className="text-sm font-medium text-slate-500">
                {value.label}
              </div>
              <div className="mt-3 text-4xl font-semibold text-slate-950">
                {value.value}
              </div>
              <div className="mt-2 rounded-md bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-800">
                {value.comparison}
              </div>
              <h4 className="mt-5 font-semibold text-slate-950">
                {value.meaning}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {value.explanation}
              </p>
            </article>
          ))}
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="06"
        title="Risks and Root Causes"
        subtitle="Risk matrix for the executive discussion."
        insight="The highest risks are not abstract: adoption and instrumentation gaps directly affect renewal proof and incident confidence."
        recommendation="Bring a response plan for every risk so the QBR feels controlled, not defensive."
      >
        <div className="overflow-hidden rounded-md border border-slate-200">
          <div className="grid grid-cols-[1fr_1.2fr_1.2fr_1.2fr] bg-slate-100 px-4 py-3 text-xs font-semibold uppercase text-slate-600">
            <div>Risk</div>
            <div>Evidence</div>
            <div>Business impact</div>
            <div>Recommended TSM response</div>
          </div>
          <div className="divide-y divide-slate-100 bg-white">
            {riskMatrix.map((risk) => (
              <div
                key={risk.risk}
                className="grid grid-cols-1 gap-3 px-4 py-4 text-sm lg:grid-cols-[1fr_1.2fr_1.2fr_1.2fr]"
              >
                <div>
                  <SeverityBadge severity={risk.severity} />
                  <div className="mt-2 font-semibold text-slate-950">
                    {risk.risk}
                  </div>
                </div>
                <div className="leading-6 text-slate-700">{risk.evidence}</div>
                <div className="leading-6 text-slate-700">{risk.impact}</div>
                <div className="border-l-2 border-cyan-500 bg-slate-50 px-3 py-2 leading-6 text-slate-700">
                  {risk.response}
                </div>
              </div>
            ))}
          </div>
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="07"
        title="Recommended TSM Action Plan"
        subtitle="30/60/90-day timeline to stabilize, expand adoption, and prove renewal value."
        insight="The plan moves from executive alignment to broader adoption to measurable renewal proof."
        recommendation="Use this as the customer-facing follow-up plan after the QBR."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {actionPlan.map((item) => (
            <article
              key={`${item.period}-${item.theme}`}
              className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
                <div>
                  <div className="text-xs font-semibold uppercase text-slate-500">
                    {item.period}
                  </div>
                  <h4 className="mt-1 text-lg font-semibold text-slate-950">
                    {item.theme}
                  </h4>
                </div>
                <span className="rounded-md bg-cyan-100 px-2 py-1 text-xs font-semibold text-cyan-800">
                  {item.owner}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                {item.actions.map((action) => (
                  <div
                    key={action}
                    className="border-l-2 border-cyan-500 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700"
                  >
                    {action}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-md bg-emerald-50 p-3">
                <div className="text-xs font-semibold uppercase text-emerald-800">
                  Expected outcome
                </div>
                <p className="mt-1 text-sm leading-6 text-emerald-950">
                  {item.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="08"
        title="Renewal and Expansion Strategy"
        subtitle="Strategic recommendation tied to customer outcomes, not product inventory."
        insight="Distributed Tracing is the strongest next-best motion because it addresses reliability, root-cause confidence, and executive visibility."
        recommendation="Position Browser Monitoring as the customer-experience companion once tracing is aligned."
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="rounded-md border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5">
            <h4 className="text-lg font-semibold text-slate-950">
              Recommended next-best motion
            </h4>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <StrategyBlock
                title="Distributed Tracing"
                detail="Creates checkout-to-database evidence, improves incident root-cause confidence, and makes reliability progress visible to executives."
              />
              <StrategyBlock
                title="Browser Monitoring"
                detail="Connects digital experience, frontend errors, and conversion risk to the business outcomes executives care about."
              />
            </div>
            <div className="mt-4 rounded-md border border-cyan-200 bg-cyan-50 p-4">
              <div className="text-xs font-semibold uppercase text-cyan-800">
                Why now
              </div>
              <p className="mt-2 text-sm leading-6 text-cyan-950">
                The customer has enough value proof to expand, but incomplete
                journey visibility still creates risk. The next motion should
                improve reliability, customer experience, and executive
                confidence at the same time.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <BriefingFact label="Renewal confidence" value="Positive, value validation" />
            <BriefingFact label="Expansion opportunity" value="$570K ARR" />
            <BriefingFact label="Recommended motion" value="Distributed Tracing" />
            <BriefingFact label="Customer outcome" value="Faster diagnosis and clearer customer experience visibility" />
          </div>
        </div>
      </BriefingSlide>

      <BriefingSlide
        number="09"
        title="Suggested Customer Discussion Questions"
        subtitle="Questions designed to uncover blockers, priorities, operational gaps, and expansion readiness."
        insight="The best QBR discussion should validate executive priorities and create commitment to the next operating motion."
        recommendation="Use these questions to move from presentation to decision."
      >
        <div className="grid gap-3 md:grid-cols-2">
          {discussionQuestions.map((question, index) => (
            <div
              key={question}
              className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-4"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-md bg-cyan-100 text-xs font-bold text-cyan-800">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-slate-700">{question}</p>
            </div>
          ))}
        </div>
      </BriefingSlide>
    </div>
  );
}

function CoverSlide() {
  return (
    <section
      data-ebr-slide
      className="ebr-slide ebr-cover-slide relative overflow-hidden rounded-md border border-slate-200 bg-[#101828] p-6 text-white shadow-sm sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-cyan-400" />
      <div className="flex min-h-[560px] flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            {generatedFrom.map((source) => (
              <span
                key={source}
                className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200"
              >
                {source}
              </span>
            ))}
          </div>
          <div className="mt-16 max-w-4xl">
            <div className="text-sm font-semibold uppercase text-cyan-200">
              Prepared for executive review
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-normal">
              Executive Business Review
            </h1>
            <p className="mt-5 text-2xl text-slate-200">{customer.name}</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          <CoverFact label="Account health" value={`${insight.unifiedHealthScore}/100`} />
          <CoverFact label="Renewal timeline" value={customer.renewal.replace("Renewal: ", "")} />
          <CoverFact label="ARR" value={customer.arr} />
          <CoverFact label="Account posture" value={`${insight.riskLevel} risk`} />
        </div>
      </div>
      <SlideFooter invert />
    </section>
  );
}

function BriefingSlide({
  number,
  title,
  subtitle,
  insight,
  recommendation,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  insight: string;
  recommendation: string;
  children: React.ReactNode;
}) {
  return (
    <section
      data-ebr-slide
      className="ebr-slide rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-5 border-b border-slate-200 pb-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-700">
                {number}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>
          <SourceBadges compact />
        </div>
        <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <Callout label="Key insight" text={insight} />
          <Callout label="TSM action" text={recommendation} />
        </div>
      </div>
      {children}
      <SlideFooter />
    </section>
  );
}

function MessageCard({
  index,
  headline,
  text,
}: {
  index: number;
  headline: string;
  text: string;
}) {
  return (
    <article className="rounded-md border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm">
      <span className="grid size-8 place-items-center rounded-md bg-cyan-100 text-sm font-bold text-cyan-800">
        {index}
      </span>
      <h4 className="mt-4 font-semibold text-slate-950">{headline}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
    </article>
  );
}

function BriefingFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-semibold text-slate-950">{value}</div>
    </div>
  );
}

function CoverFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/10 px-4 py-3">
      <div className="text-xs font-medium uppercase text-slate-300">{label}</div>
      <div className="mt-1 font-semibold text-white">{value}</div>
    </div>
  );
}

function Callout({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-md border border-cyan-200 bg-cyan-50 px-4 py-3">
      <div className="text-xs font-semibold uppercase text-cyan-800">
        {label}
      </div>
      <p className="mt-1 text-sm leading-6 text-cyan-950">{text}</p>
    </div>
  );
}

function StatusBadge({ label }: { label: string }) {
  const tone =
    label === "Watch"
      ? "bg-amber-100 text-amber-800"
      : label === "Strong" || label === "On track"
        ? "bg-emerald-100 text-emerald-800"
        : "bg-cyan-100 text-cyan-800";

  return (
    <span className={`rounded-md px-2 py-1 text-xs font-semibold ${tone}`}>
      {label}
    </span>
  );
}

function SeverityBadge({ severity }: { severity: string }) {
  const tone =
    severity === "High"
      ? "bg-rose-100 text-rose-800"
      : severity === "Medium"
        ? "bg-amber-100 text-amber-800"
        : "bg-emerald-100 text-emerald-800";

  return (
    <span className={`rounded-md px-2 py-1 text-xs font-semibold ${tone}`}>
      {severity}
    </span>
  );
}

function SourceBadges({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const sources = compact
    ? ["Salesforce", "Slack", "Usage", "Value", "Expansion"]
    : generatedFrom;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {sources.map((source) => (
        <SourceChip key={source} label={source} />
      ))}
    </div>
  );
}

function SourceChip({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm">
      {label}
    </span>
  );
}

function StrategyBlock({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-4">
      <h5 className="font-semibold text-slate-950">{title}</h5>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </div>
  );
}

function SlideFooter({ invert = false }: { invert?: boolean }) {
  return (
    <div
      className={`mt-6 flex items-center justify-between border-t pt-4 text-xs ${
        invert
          ? "border-white/10 text-slate-300"
          : "border-slate-200 text-slate-500"
      }`}
    >
      <span>{customer.name}</span>
      <span>Executive Business Review</span>
    </div>
  );
}
