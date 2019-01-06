import moment from "moment";
import _ from "lodash";

function reduceForMonth(accumulator, current) {
  var inMonth = isInSameCalendarMonth(current.date);
  if (current.net && inMonth) {
    accumulator = accumulator + current.net;
  }
  return accumulator;
}

function reduceForYear(accumulator, current) {
  var inYear = isInSameCalendarYear(current.date);
  if (current.net && inYear) {
    accumulator = accumulator + current.net;
  }
  return accumulator;
}

function reduceForPendingGross(accumulator, current) {
  if (!current.paid) {
    accumulator = accumulator + current.gross;
  }
  //rounds to nearest 2nd decimal place returns a string
  var roundedStr = Number(accumulator).toFixed(2);
  //converts back to  Number ("12.50" will be 12.5)
  return Number(roundedStr);
}

function reduceForPendingEstNet(accumulator, current) {
  if (!current.paid) {
    accumulator = accumulator + current.estNet;
  }
  //rounds to nearest 2nd decimal place returns a string
  var roundedStr = Number(accumulator).toFixed(2);
  //converts back to  Number ("12.50" will be 12.5)
  return Number(roundedStr);
}

export function isInSameCalendarYear(dateStr) {
  var now = moment();
  return now.isSame(dateStr, "year");
}

export function isInSameCalendarMonth(dateStr) {
  var now = moment();
  return now.isSame(dateStr, "month");
}

//TODO only past jobs should be calculated in income statistics
export function calculateSumOfPendingGross(allJobs) {
  return _.reduce(allJobs, reduceForPendingGross, 0);
}

export function calculateSumOfPendingEstNet(allJobs) {
  return _.reduce(allJobs, reduceForPendingEstNet, 0);
}
export function calculateNetYearToDate(allJobs) {
  return _.reduce(allJobs, reduceForYear, 0);
}
export function calculateNetMonthToDate(allJobs) {
  return _.reduce(allJobs, reduceForMonth, 0);
}
