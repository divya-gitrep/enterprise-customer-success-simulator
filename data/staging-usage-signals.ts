export type StagingUsageSignal = {
  label: string;
  value: string;
  score: number;
  trend: "positive" | "watch" | "risk";
  detail: string;
};

export const stagingUsageSignals: StagingUsageSignal[] = [
  {
    label: "Active users",
    value: "418 MAU",
    score: 80,
    trend: "positive",
    detail: "Platform teams are active weekly, with growth in payments and digital channels.",
  },
  {
    label: "Dashboard usage",
    value: "74%",
    score: 74,
    trend: "watch",
    detail: "Operational dashboards are used consistently, but executive dashboards are still early.",
  },
  {
    label: "Instrumented services",
    value: "61%",
    score: 61,
    trend: "watch",
    detail: "Critical Java services are instrumented, but mobile and browser journeys remain incomplete.",
  },
  {
    label: "Staging validation",
    value: "6 releases",
    score: 69,
    trend: "watch",
    detail: "Release validation is improving, but checkout regression tests need stronger trace coverage.",
  },
];
