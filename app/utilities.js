import moment from "moment";
import _ from "lodash";

export const formatDate = str => {
  const date = moment(str);
  console.log("formatDate givendate is ", date);
  const now = moment();
  const isInFuture = now.isBefore(date); //bool true if date is after now
  let diff = moment().diff(date, "days");
  diff = Math.abs(diff); // convert moment.diff to positive if it returns negative number
  console.log("difference in days days", diff);
  console.log(isInFuture);
  // toNow display example "in 6 days"
  //fromNow displays "6 days ago"
  if (diff > 7) {
    return date.format("ll");
  }
  return now.to(date);
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
    const now = moment();
    return now.isAfter(value.date);
  });
};

export const filterPastJobs = jobs => {
  return _.filter(jobs, value => {
    const now = moment();
    return now.isBefore(value.date);
  });
};

export const filterYTD = jobs => {
  const year = moment()
    .year()
    .toString();
  console.log(year);
  const JanFirst = `${year}-1-1`;
  const jobsThisYear = _.filter(jobs, value => {
    return moment(value.date).isAfter(JanFirst);
  });
  console.log("jobs this year", jobsThisYear);
  return jobsThisYear;
};

export const filterMTD = jobs => {
  const year = moment()
    .year()
    .toString();
  let month = moment().month();
  month = (month + 1).toString();
  console.log(month);
  const monthFirst = `${year}-${month}-1`;
  const jobsThisMonth = _.filter(jobs, value => {
    return moment(value.date).isAfter(monthFirst);
  });
  console.log("jobs this month", jobsThisMonth);
  return jobsThisMonth;
};
