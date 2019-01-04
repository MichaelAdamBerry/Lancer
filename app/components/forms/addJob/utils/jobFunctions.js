import moment from "moment";

export function getRegularHoursWorked(date, startTime, endTime) {
  //if startTime is before 6am set startTime to 6am
  var overTimeStopper = date.concat("  6:00");
  var dateTimeStart = date.concat(" ", startTime);
  var dateTimeEnd = date.concat(" ", endTime);
  if (moment(dateTimeStart).isBefore(overTimeStopper)) {
    var start = overTimeStopper;
  } else {
    var start = moment(dateTimeStart);
  }
  var end = moment(dateTimeEnd);
  var diffInMinutes = end.diff(start, "minutes");
  console.log(`diffInMinutes is ${diffInMinutes}`);
  return diffInMinutes / 60;
}

export function getNghtOverTimeHoursWorked(startTime, date) {
  var dateTimeStart = date.concat(" ", startTime);
  var overTimeStopper = date.concat(" 6:00");
  var start = moment(dateTimeStart);
  var end = moment(overTimeStopper);
  var diffInMinutes = end.diff(start, "minutes");
  if (diffInMinutes > 0) {
    return diffInMinutes / 60;
  } else {
    return 0;
  }
}

export function calculateGrossPay(rate, clientObj, hours, overTimeHours) {
  if (rate === "Hourly") {
    var hourRate = Number(clientObj.hrRate);
    var otRate = Number(clientObj.otRate);
    if (overTimeHours > 0) {
      return hourRate * hours + otRate * overTimeHours;
    } else {
      return hourRate * hours;
    }
  } else if (rate === "Day Rate") {
    //1440 minutes in a day TODO check if dates span multiple days;
    var dayRate = Number(clientObj.dayRate);
    return dayRate;
  } else {
    console.warn("could not find rate");
  }
}

//TODO warn user how estimated net pay
export function estimateNetPay(grossPay) {
  return grossPay * 0.7;
}
