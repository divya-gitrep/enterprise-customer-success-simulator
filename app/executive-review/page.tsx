import { SimulatorPage } from "../components/SimulatorPage";
import { getRouteByHref } from "../data/simulator";

export default function ExecutiveReviewPage() {
  return <SimulatorPage route={getRouteByHref("/executive-review")} />;
}
