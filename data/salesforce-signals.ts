export type SalesforceSignal = {
  label: string;
  value: string;
  score: number;
  trend: "positive" | "watch" | "risk";
  detail: string;
};

export const salesforceSignals: SalesforceSignal[] = [
  {
    label: "Renewal stage",
    value: "Value validation",
    score: 74,
    trend: "watch",
    detail: "Renewal is progressing, but procurement needs a clearer value narrative.",
  },
  {
    label: "Open opportunities",
    value: "$570K expansion",
    score: 82,
    trend: "positive",
    detail: "Browser Monitoring, Distributed Tracing, and Mobile Monitoring are qualified.",
  },
  {
    label: "Support escalations",
    value: "2 active",
    score: 58,
    trend: "risk",
    detail: "One data-retention case and one dashboard ownership case need executive visibility.",
  },
  {
    label: "Executive sponsor activity",
    value: "Engaged",
    score: 86,
    trend: "positive",
    detail: "Elara Voss attended the last value review and requested a QBR follow-up.",
  },
];
