import { SimulatorPage } from "../components/SimulatorPage";
import { getRouteByHref } from "../data/simulator";

export default function BusinessValueDashboardPage() {
  return <SimulatorPage route={getRouteByHref("/business-value-dashboard")} />;
}
