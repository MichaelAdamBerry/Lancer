import { dollarFormat } from "../../../../utilities";

function renderEstimatedNet(estNet) {
  return {
    string: `${dollarFormat(estNet)}`,
    style: { color: "red", fontStyle: "italic" }
  };
}

function renderNet(net) {
  return { string: `${dollarFormat(net)}`, style: { fontWeight: "bold" } };
}

export function renderPaymentTD(job) {
  return !job.net ? renderEstimatedNet(job.estNet) : renderNet(job.net);
}
