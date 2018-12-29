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
