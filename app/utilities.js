import moment from "moment";
import _ from "lodash";

export function formatDate(str) {
  return moment(str).format("ll");
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

//TODO named function
export const filterYTD = jobs => {
  const year = moment()
    .year()
    .toString();
  const JanFirst = `${year}-1-1`;
  const jobsThisYear = _.filter(jobs, value => {
    const dateTime = value.startTime
      ? `${value.date} ${value.startTime}`
      : `${value.date}`;
    return moment(dateTime).isAfter(JanFirst);
  });
  return jobsThisYear;
};

function callbackFilter(jobObj) {
  if (!jobObj.startTime) {
    var dateTime = jobObj.date;
  } else {
    var dateTime = jobObj.date + " " + jobObj.startTime;
  }
  var year = moment()
    .year()
    .toString();
  let month = moment().month();
  month = (month + 1).toString();
  var firstOfMonth = year.concat("-", month, "-1");
  return moment(dateTime).isAfter(firstOfMonth);
}

//TODO named function
export function filterMTD(jobs) {
  function callbackFilter(jobObj) {
    if (!jobObj.startTime) {
      var dateTime = jobObj.date;
    } else {
      var dateTime = jobObj.date + " " + jobObj.startTime;
    }
    var year = moment()
      .year()
      .toString();
    let month = moment().month();
    month = (month + 1).toString();
    var firstOfMonth = year.concat("-", month, "-1");
    return moment(dateTime).isAfter(firstOfMonth);
  }
  var jobsThisMonth = _.filter(jobs, callbackFilter);
  console.log(jobsThisMonth);
  return jobsThisMonth;
}

export function getMinutesWorked(date, startTime, endTime) {
  var dateTimeStart = date.concat(" ", startTime);
  var dateTimeEnd = date.concat(" ", endTime);
  var start = moment(dateTimeStart);
  var end = moment(dateTimeEnd);
  var diffInMinutes = end.diff(start, "minutes");
  console.log(`diffInMinutes is ${diffInMinutes}`);
  return diffInMinutes;
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
