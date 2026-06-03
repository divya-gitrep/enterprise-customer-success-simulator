import { SimulatorPage } from "../components/SimulatorPage";
import { getRouteByHref } from "../data/simulator";

export default function IncidentCommandCenterPage() {
  return <SimulatorPage route={getRouteByHref("/incident-command-center")} />;
}
