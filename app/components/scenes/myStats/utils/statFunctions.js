import moment from "moment";
import _ from "lodash";

function reduceForMonth(accumulator, current) {
  var inMonth = isInSameCalendarMonth(current.date);
  if (current.paid && inMonth) {
    accumulator = accumulator + current.net;
  }
  return accumulator;
}

function reduceForYear(accumulator, current) {
  var inYear = isInSameCalendarYear(current.date);
  if (current.paid && inYear) {
    accumulator = accumulator + current.net;
  }
  return accumulator;
}

function isInSameCalendarYear(dateStr) {
  var now = moment();
  return now.isSame(dateStr, "year");
}

function isInSameCalendarMonth(dateStr) {
  var now = moment();
  return now.isSame(dateStr, "month");
}

export function calculateNetYearToDate(allJobs) {
  return _.reduce(allJobs, reduceForYear, 0);
}
export function calculateNetMonthToDate(allJobs) {
  return _.reduce(allJobs, reduceForMonth, 0);
}
