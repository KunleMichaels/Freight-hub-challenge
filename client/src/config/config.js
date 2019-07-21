import { dev } from "./environments/dev";
import { production } from "./environments/prod";
const env = process.env.REACT_APP_STAGE === "dev" ? dev : production;

export const config = {
  ...env,
  appName: "Freight Hub Shipments"
};
