import "./set-public-path";
import { provide } from "@openmrs/esm-module-config";
import { icrcPatientChartConfig } from "./icrc-patient-chart-schema.js";

provide(icrcPatientChartConfig);
export function setupOpenMRS() {
  return {
    lifecycle: () => Promise.resolve(),
    activate: () => false
  };
}
