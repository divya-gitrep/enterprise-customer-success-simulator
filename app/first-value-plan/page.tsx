import { SimulatorPage } from "../components/SimulatorPage";
import { getRouteByHref } from "../data/simulator";

export default function FirstValuePlanPage() {
  return <SimulatorPage route={getRouteByHref("/first-value-plan")} />;
}
