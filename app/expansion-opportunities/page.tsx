import { SimulatorPage } from "../components/SimulatorPage";
import { getRouteByHref } from "../data/simulator";

export default function ExpansionOpportunitiesPage() {
  return <SimulatorPage route={getRouteByHref("/expansion-opportunities")} />;
}
