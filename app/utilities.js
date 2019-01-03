import moment from "moment";
import _ from "lodash";

export const formatDate = str => {
  //if (diff > 7) {
  return moment(str).format("ll");
};

export const formatTime = str => {
  const num = Number(str.split(":")[0]);
  const hrs = num % 12 !== 0 ? (num % 12).toString() : "12";
  const min = str.split(":")[1];
  const amPm = num > 12 ? "pm" : "am";
  return `${hrs}:${min} ${amPm}`;
};

export const collectIdsAndDocs = doc => {
  return { id: doc.id, ...doc.data() };
};

export const filterFutureJobs = jobs => {
  return _.filter(jobs, value => {
    const dateTime = value.startTime
      ? `${value.date} ${value.startTime}`
      : `${value.date}`;
    const now = moment();
    return now.isAfter(dateTime);
  });
};

export const filterPastJobs = jobs => {
  return _.filter(jobs, value => {
    const dateTime = value.startTime
      ? `${value.date} ${value.startTime}`
      : `${value.date}`;
    const now = moment();
    console.log(now);
    console.log(dateTime);
    return now.isBefore(dateTime);
  });
};

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

export const filterMTD = jobs => {
  const year = moment()
    .year()
    .toString();
  let month = moment().month();
  month = (month + 1).toString();
  const monthFirst = `${year}-${month}-1`;
  const jobsThisMonth = _.filter(jobs, value => {
    const dateTime = value.startTime
      ? `${value.date} ${value.startTime}`
      : `${value.date}`;
    return moment(dateTime).isAfter(monthFirst);
  });
  return jobsThisMonth;
};

export const getMinutesWorked = (date, startTime, endTime) => {
  const dateTimeStart = `${date} ${startTime}`;
  const dateTimeEnd = `${date} ${endTime}`;
  const start = moment(dateTimeStart);
  const end = moment(dateTimeEnd);
  const diffInMinutes = end.diff(start, "minutes");
  console.log(`diffInMinutes is ${diffInMinutes}`);
  return diffInMinutes;
};

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
