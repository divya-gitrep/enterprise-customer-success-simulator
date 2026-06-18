export type SlackSignal = {
  label: string;
  value: string;
  score: number;
  trend: "positive" | "watch" | "risk";
  detail: string;
};

export const slackSignals: SlackSignal[] = [
  {
    label: "Sentiment",
    value: "Mixed",
    score: 62,
    trend: "watch",
    detail: "SRE feedback is positive, while product leaders are asking for more business-context dashboards.",
  },
  {
    label: "Response velocity",
    value: "3.4h avg",
    score: 71,
    trend: "watch",
    detail: "Technical questions are answered within one business day, but executive asks wait longer.",
  },
  {
    label: "Adoption blockers",
    value: "4 themes",
    score: 54,
    trend: "risk",
    detail: "Common blockers include dashboard sprawl, missing ownership tags, and unclear alert routing.",
  },
  {
    label: "Champion activity",
    value: "High",
    score: 88,
    trend: "positive",
    detail: "Customer champions share incident learnings and promote the first value plan in Slack.",
  },
];
