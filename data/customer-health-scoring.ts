type Signal = {
  label: string;
  score: number;
  trend: "positive" | "watch" | "risk";
  detail: string;
};

export type UnifiedHealthInsight = {
  unifiedHealthScore: number;
  riskLevel: "Low" | "Medium" | "High";
  keyRiskReasons: string[];
  recommendedTsmAction: string;
  sourceScores: {
    salesforce: number;
    slack: number;
    usage: number;
  };
};

export function calculateUnifiedHealthInsight({
  salesforceSignals,
  slackSignals,
  usageSignals,
}: {
  salesforceSignals: Signal[];
  slackSignals: Signal[];
  usageSignals: Signal[];
}): UnifiedHealthInsight {
  const sourceScores = {
    salesforce: averageScore(salesforceSignals),
    slack: averageScore(slackSignals),
    usage: averageScore(usageSignals),
  };

  const unifiedHealthScore = Math.round(
    sourceScores.salesforce * 0.35 +
      sourceScores.slack * 0.25 +
      sourceScores.usage * 0.4,
  );
  const riskLevel = getRiskLevel(unifiedHealthScore);
  const keyRiskReasons = [
    ...salesforceSignals,
    ...slackSignals,
    ...usageSignals,
  ]
    .filter((signal) => signal.score < 70 || signal.trend === "risk")
    .sort((a, b) => a.score - b.score)
    .slice(0, 4)
    .map((signal) => `${signal.label}: ${signal.detail}`);

  return {
    unifiedHealthScore,
    riskLevel,
    keyRiskReasons,
    recommendedTsmAction: getRecommendedTsmAction(riskLevel, keyRiskReasons),
    sourceScores,
  };
}

function averageScore(signals: Signal[]) {
  const total = signals.reduce((sum, signal) => sum + signal.score, 0);
  return Math.round(total / signals.length);
}

function getRiskLevel(score: number): UnifiedHealthInsight["riskLevel"] {
  if (score >= 80) {
    return "Low";
  }

  if (score >= 65) {
    return "Medium";
  }

  return "High";
}

function getRecommendedTsmAction(
  riskLevel: UnifiedHealthInsight["riskLevel"],
  keyRiskReasons: string[],
) {
  if (riskLevel === "High") {
    return "Open a recovery plan with the executive sponsor, align owners for the top risk reasons, and review progress twice weekly.";
  }

  if (riskLevel === "Medium") {
    return "Run a targeted adoption and value workshop focused on the top risk reasons, then update the QBR plan with recovery metrics.";
  }

  if (keyRiskReasons.length > 0) {
    return "Keep the account in value-realization motion and resolve the remaining watch items before the next executive review.";
  }

  return "Continue expansion planning and prepare the next executive value review.";
}
