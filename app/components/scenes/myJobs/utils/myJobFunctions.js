import { dollarFormat } from "../../../../utilities";

export function renderEstimatedNet(estNet) {
  return {
    string: `${dollarFormat(estNet)}`,
    style: { color: "red", fontStyle: "italic" }
  };
}

export function renderNet(net) {
  return { string: `${dollarFormat(net)}`, style: { fontWeight: "bold" } };
}

export function renderPaymentTD(job) {
  return !job.net ? renderEstimatedNet(job.estNet) : renderNet(job.net);
}
