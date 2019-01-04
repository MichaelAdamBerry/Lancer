import moment from "moment";
import _ from "lodash";

export function formatDate(str) {
  return moment(str).format("ll");
}

export function dollarFormat(number) {
  var dollars = Number(number).toFixed(2);
  return `$${dollars}`;
}

//named function declaration  for formatTime
export function formatTime(timeStr) {
  var hours = Number(timeStr.split(":")[0]);
  //hours to account for 12am read as 0
  var hoursStr = hours % 12 !== 0 ? (hours % 12).toString() : "12";
  var minutesStr = timeStr.split(":")[1];
  var suffix = hours > 12 ? "pm" : "am";
  return hoursStr + ":" + minutesStr + " " + suffix;
}

export function collectIdsAndDocs(doc) {
  return { id: doc.id, ...doc.data() };
}

export function filterFutureJobs(jobs) {
  function callbackFilterFuture(value) {
    if (!value.startTime) {
      var dateTime = value.date;
    } else {
      var dateTime = value.date + " " + value.startTime;
    }
    var now = moment();
    return now.isAfter(dateTime);
  }
  return _.filter(jobs, callbackFilterFuture);
}

export function filterPastJobs(jobs) {
  function callbackFilterPast(value) {
    if (!value.startTime) {
      var dateTime = value.date;
    } else {
      var dateTime = value.date + " " + value.startTime;
    }
    var now = moment();
    return now.isBefore(dateTime);
  }
  return _.filter(jobs, callbackFilterPast);
}

export const calculateGrossJob = (rateType, clientObj, custom) => {
  if (rateType === "Hourly") {
    const rate = Number(clientObj.hrRate);
    const time = 4; // TODO diff endTime - startTime;
    return rate * time;
  } else if (rateType === "Day Rate") {
    const rate = Number(clientObj.dayRate);
    const daysWorked = 1; //TODO difference between the startTime and endTime in days
    return rate * daysWorked;
  }
  //TODO if custom is selected in the form there should be a popup input for custom rate
  else if (rateType === "Custom") {
    const rate = custom;
    return rate;
  } else {
    console.error(
      "Unable to calculate earnings for this job. Make sure you have entered a valid Rate for this client"
    );
  }
};
