export type SimulatorRoute = {
  title: string;
  href: string;
  shortLabel: string;
  description: string;
  stage: string;
  status: string;
  owner: string;
  risk: "Low" | "Medium" | "High";
  summary: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  priorities: string[];
  signals: {
    label: string;
    value: string;
    tone: "good" | "watch" | "risk";
  }[];
  timeline: {
    date: string;
    event: string;
    detail: string;
  }[];
};

export const customer = {
  name: "Acme Financial Group",
  segment: "Global Enterprise",
  plan: "Strategic Success",
  arr: "$2.4M ARR",
  renewal: "Renewal: Oct 18, 2026",
  executiveSponsor: "Elara Voss, Chief Digital Officer",
  team: "Cloud Platform, Payments, Digital Channels",
};

export const routes: SimulatorRoute[] = [
  {
    title: "Customer Discovery",
    href: "/customer-discovery",
    shortLabel: "Discovery",
    description: "Capture the account context, stakeholders, current pains, and success criteria.",
    stage: "Qualification",
    status: "In progress",
    owner: "Rowan Vale",
    risk: "Medium",
    summary:
      "The customer is standardizing digital banking observability after three customer-impacting incidents across payment rails and mobile login.",
    metrics: [
      { label: "Stakeholders mapped", value: "14", detail: "6 executive influencers" },
      { label: "Discovery coverage", value: "72%", detail: "Security review pending" },
      { label: "Known use cases", value: "9", detail: "4 tied to renewal" },
    ],
    priorities: [
      "Validate business impact from payment authorization delays.",
      "Document executive sponsor success outcomes for Q3 steering committee.",
      "Confirm procurement, security, and architecture decision owners.",
    ],
    signals: [
      { label: "Sponsor access", value: "Strong", tone: "good" },
      { label: "Technical urgency", value: "High", tone: "good" },
      { label: "Procurement clarity", value: "Limited", tone: "watch" },
    ],
    timeline: [
      {
        date: "Jun 4",
        event: "Discovery workshop",
        detail: "Payments, SRE, fraud operations, and mobile engineering alignment.",
      },
      {
        date: "Jun 7",
        event: "Stakeholder map review",
        detail: "Confirm blockers and executive priorities before assessment.",
      },
    ],
  },
  {
    title: "Observability Assessment",
    href: "/observability-assessment",
    shortLabel: "Assessment",
    description: "Evaluate telemetry maturity, service coverage, alert quality, and incident readiness.",
    stage: "Assessment",
    status: "Ready",
    owner: "Nia Calder",
    risk: "High",
    summary:
      "Coverage is strong for infrastructure but weak for customer journey telemetry, leaving revenue-impacting issues hard to triage.",
    metrics: [
      { label: "Service coverage", value: "61%", detail: "Critical APIs: 48%" },
      { label: "Noisy alerts", value: "38%", detail: "Duplicate policy overlap" },
      { label: "MTTD baseline", value: "27m", detail: "Target: under 8m" },
    ],
    priorities: [
      "Score top 20 customer-facing services against golden signal coverage.",
      "Identify telemetry gaps for login, payment authorization, and dispute flows.",
      "Separate actionable incidents from notification noise in current policies.",
    ],
    signals: [
      { label: "API tracing", value: "Partial", tone: "watch" },
      { label: "Synthetic checks", value: "Absent", tone: "risk" },
      { label: "Runbook quality", value: "Uneven", tone: "watch" },
    ],
    timeline: [
      {
        date: "Jun 10",
        event: "Telemetry review",
        detail: "Assess dashboards, traces, logs, alerts, and ownership metadata.",
      },
      {
        date: "Jun 13",
        event: "Maturity readout",
        detail: "Publish scorecard with gaps, effort, and business impact.",
      },
    ],
  },
  {
    title: "First Value Plan",
    href: "/first-value-plan",
    shortLabel: "First Value",
    description: "Define a focused implementation path that proves measurable customer value quickly.",
    stage: "Activation",
    status: "Drafted",
    owner: "Rowan Vale",
    risk: "Low",
    summary:
      "The first value motion centers on payment authorization reliability, with a clear four-week path from instrumentation to executive proof.",
    metrics: [
      { label: "Time to first value", value: "28d", detail: "Four delivery sprints" },
      { label: "Primary services", value: "6", detail: "Payment authorization path" },
      { label: "Success measures", value: "5", detail: "Shared with sponsor" },
    ],
    priorities: [
      "Instrument payment authorization and issuer callback dependencies.",
      "Create incident dashboard showing customer impact, revenue risk, and ownership.",
      "Run a value review using baseline and post-implementation signal quality.",
    ],
    signals: [
      { label: "Executive alignment", value: "Confirmed", tone: "good" },
      { label: "Delivery capacity", value: "Available", tone: "good" },
      { label: "Security dependency", value: "Minor", tone: "watch" },
    ],
    timeline: [
      {
        date: "Jun 17",
        event: "Kickoff",
        detail: "Agree scope, owners, data access, and success measurements.",
      },
      {
        date: "Jul 12",
        event: "First value review",
        detail: "Compare baseline MTTD and payment flow visibility improvements.",
      },
    ],
  },
  {
    title: "Incident Command Center",
    href: "/incident-command-center",
    shortLabel: "Command",
    description: "Simulate major incident coordination across customer impact, ownership, and response.",
    stage: "Live response",
    status: "Active simulation",
    owner: "Tessa Orin",
    risk: "High",
    summary:
      "A simulated mobile login degradation is testing how quickly teams can assign command, quantify impact, and coordinate updates.",
    metrics: [
      { label: "Active incident", value: "SEV-2", detail: "Mobile login latency" },
      { label: "Users affected", value: "183K", detail: "Peak 14-minute window" },
      { label: "MTTR estimate", value: "42m", detail: "Down from 76m baseline" },
    ],
    priorities: [
      "Assign incident commander, communications lead, and technical lead.",
      "Track customer-visible symptoms with impact, scope, and resolution confidence.",
      "Capture remediation actions for the post-incident executive summary.",
    ],
    signals: [
      { label: "Command assigned", value: "Yes", tone: "good" },
      { label: "Customer update", value: "Due", tone: "watch" },
      { label: "Root cause", value: "Unknown", tone: "risk" },
    ],
    timeline: [
      {
        date: "09:14",
        event: "Alert correlated",
        detail: "Login latency and token refresh errors grouped into one incident.",
      },
      {
        date: "09:31",
        event: "Mitigation applied",
        detail: "Traffic shifted away from degraded identity provider region.",
      },
    ],
  },
  {
    title: "Business Value Dashboard",
    href: "/business-value-dashboard",
    shortLabel: "Value",
    description: "Translate technical improvements into renewal, risk, and operating value.",
    stage: "Value realization",
    status: "Measured",
    owner: "Milo Sable",
    risk: "Low",
    summary:
      "The account is showing measurable incident reduction and faster triage, creating a strong value narrative for renewal.",
    metrics: [
      { label: "Estimated savings", value: "$740K", detail: "Annualized operations impact" },
      { label: "MTTD reduction", value: "68%", detail: "Payment flow incidents" },
      { label: "Incidents avoided", value: "11", detail: "Quarter to date" },
    ],
    priorities: [
      "Connect reliability gains to digital transaction conversion protection.",
      "Package executive-ready proof points for the quarterly business review.",
      "Quantify productivity value from reduced escalation load.",
    ],
    signals: [
      { label: "Renewal proof", value: "Strong", tone: "good" },
      { label: "CFO narrative", value: "Ready", tone: "good" },
      { label: "Attribution model", value: "Needs review", tone: "watch" },
    ],
    timeline: [
      {
        date: "Jul 19",
        event: "Value model signoff",
        detail: "Finance operations validates savings assumptions and incident costs.",
      },
      {
        date: "Jul 24",
        event: "Sponsor readout",
        detail: "Share value story and agree renewal narrative.",
      },
    ],
  },
  {
    title: "Account Health",
    href: "/account-health",
    shortLabel: "Health",
    description: "Monitor adoption, sentiment, support patterns, and renewal health.",
    stage: "Adoption",
    status: "Healthy",
    owner: "Rowan Vale",
    risk: "Medium",
    summary:
      "Overall health is positive, though adoption is concentrated in platform teams and needs expansion into fraud operations.",
    metrics: [
      { label: "Health score", value: "82", detail: "Up 9 points this quarter" },
      { label: "Monthly active users", value: "418", detail: "37% growth" },
      { label: "Open support cases", value: "7", detail: "1 escalated" },
    ],
    priorities: [
      "Broaden usage into fraud operations and digital channel product teams.",
      "Reduce support case aging on SSO provisioning and data retention questions.",
      "Create an adoption risk plan for teams below weekly active usage thresholds.",
    ],
    signals: [
      { label: "Product adoption", value: "Expanding", tone: "good" },
      { label: "Support load", value: "Moderate", tone: "watch" },
      { label: "Renewal confidence", value: "Positive", tone: "good" },
    ],
    timeline: [
      {
        date: "Aug 2",
        event: "Adoption review",
        detail: "Review team-level activation and inactive workspace recovery plan.",
      },
      {
        date: "Aug 9",
        event: "Support trend check",
        detail: "Validate whether provisioning case volume is declining.",
      },
    ],
  },
  {
    title: "Customer Success Scenarios",
    href: "/customer-success-scenarios",
    shortLabel: "Scenarios",
    description: "Practice customer success decisions and review decision quality.",
    stage: "Simulation",
    status: "Interactive",
    owner: "Rowan Vale",
    risk: "Medium",
    summary:
      "Scenario training helps the account team respond to adoption changes with evidence-based actions and executive-ready next steps.",
    metrics: [
      { label: "Scenario", value: "Adoption drop", detail: "Platform adoption down 25%" },
      { label: "Actions", value: "4", detail: "One best recommended action" },
      { label: "Decision quality", value: "Tracked", detail: "Score updates after selection" },
    ],
    priorities: [
      "Diagnose whether the adoption drop is isolated by role, team, workflow, or product area.",
      "Tie the response plan to measurable adoption recovery targets.",
      "Coach the account team to choose evidence-first actions over generic outreach.",
    ],
    signals: [
      { label: "Adoption trend", value: "-25%", tone: "risk" },
      { label: "Executive risk", value: "Elevated", tone: "watch" },
      { label: "Recovery path", value: "Actionable", tone: "good" },
    ],
    timeline: [
      {
        date: "Day 0",
        event: "Adoption drop detected",
        detail: "Active platform usage falls 25% across two high-value teams.",
      },
      {
        date: "Day 5",
        event: "Recovery checkpoint",
        detail: "Review usage recovery, stakeholder response, and value blockers.",
      },
    ],
  },
  {
    title: "Customer Intelligence Hub",
    href: "/customer-intelligence-hub",
    shortLabel: "Intelligence",
    description: "Unify mock Salesforce, Slack, and product usage signals into customer health insight.",
    stage: "Intelligence",
    status: "Mock signals",
    owner: "Rowan Vale",
    risk: "Medium",
    summary:
      "The customer intelligence hub demonstrates how commercial, collaboration, and product usage signals could inform the simulator without connecting real APIs yet.",
    metrics: [
      { label: "Data sources", value: "3", detail: "Salesforce, Slack, usage" },
      { label: "Health model", value: "Unified", detail: "Weighted mock scoring" },
      { label: "Recommended action", value: "Generated", detail: "TSM next best action" },
    ],
    priorities: [
      "Review commercial, sentiment, and usage risks in one account view.",
      "Prioritize the TSM action using the lowest-scoring signal clusters.",
      "Keep mock data separated from future API integration work.",
    ],
    signals: [
      { label: "Commercial signal", value: "Watch", tone: "watch" },
      { label: "Slack sentiment", value: "Mixed", tone: "watch" },
      { label: "Usage health", value: "Stable", tone: "good" },
    ],
    timeline: [
      {
        date: "Mock",
        event: "Signals ingested",
        detail: "Salesforce, Slack, and staging usage data are loaded from local mock files.",
      },
      {
        date: "Next",
        event: "TSM action generated",
        detail: "Unified health score and top risk reasons inform the recommended account action.",
      },
    ],
  },
  {
    title: "Expansion Opportunities",
    href: "/expansion-opportunities",
    shortLabel: "Expansion",
    description: "Identify new workloads, stakeholders, and commercial paths for growth.",
    stage: "Growth",
    status: "Qualified",
    owner: "Kieran Lume",
    risk: "Low",
    summary:
      "Three expansion paths are qualified, led by fraud analytics and digital experience monitoring for mobile banking.",
    metrics: [
      { label: "Pipeline influence", value: "$890K", detail: "Expansion ARR potential" },
      { label: "Qualified plays", value: "3", detail: "2 executive sponsored" },
      { label: "Target teams", value: "5", detail: "Fraud, risk, channels" },
    ],
    priorities: [
      "Build value hypothesis for fraud signal correlation and dispute triage.",
      "Run a mobile experience monitoring workshop with digital channels leadership.",
      "Prepare commercial packaging for incremental ingest and premium support.",
    ],
    signals: [
      { label: "Budget timing", value: "Q4", tone: "good" },
      { label: "Champion strength", value: "High", tone: "good" },
      { label: "Competitive pressure", value: "Present", tone: "watch" },
    ],
    timeline: [
      {
        date: "Aug 15",
        event: "Expansion workshop",
        detail: "Prioritize fraud operations and mobile experience use cases.",
      },
      {
        date: "Sep 1",
        event: "Commercial review",
        detail: "Align scope, pricing, and procurement sequence.",
      },
    ],
  },
  {
    title: "Executive Review",
    href: "/executive-review",
    shortLabel: "Exec Review",
    description: "Prepare an executive narrative for outcomes, risks, decisions, and next commitments.",
    stage: "Governance",
    status: "Scheduled",
    owner: "Rowan Vale",
    risk: "Low",
    summary:
      "The executive review is positioned around reliability gains, measurable business value, and expansion into customer journey observability.",
    metrics: [
      { label: "Exec attendees", value: "8", detail: "Customer and vendor leaders" },
      { label: "Decision asks", value: "4", detail: "Renewal, scope, owners" },
      { label: "Value proof points", value: "12", detail: "Validated with account team" },
    ],
    priorities: [
      "Lead with business outcomes before platform metrics.",
      "Frame open risks with owner, mitigation, and decision required.",
      "Secure executive agreement on renewal path and expansion discovery.",
    ],
    signals: [
      { label: "Sponsor confirmed", value: "Yes", tone: "good" },
      { label: "Deck readiness", value: "90%", tone: "good" },
      { label: "Legal items", value: "Open", tone: "watch" },
    ],
    timeline: [
      {
        date: "Sep 9",
        event: "Pre-brief",
        detail: "Align account team on narrative, decisions, and escalation handling.",
      },
      {
        date: "Sep 12",
        event: "Executive review",
        detail: "Present outcomes, risks, roadmap, renewal, and growth plan.",
      },
    ],
  },
];

export function getRouteByHref(href: string) {
  return routes.find((route) => route.href === href) ?? routes[0];
}
