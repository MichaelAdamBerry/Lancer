import { dollarFormat } from "../../../../utilities";

function renderEstimatedNet(estNet) {
  return `Est. net ${dollarFormat(estNet)}`;
}

function renderNet(net) {
  return `${dollarFormat(net)}`;
}

export function renderPaymentTD(job) {
  return !job.net ? renderEstimatedNet(job.estNet) : renderNet(job.net);
}
