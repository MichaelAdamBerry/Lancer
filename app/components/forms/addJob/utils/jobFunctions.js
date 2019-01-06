import moment from "moment";

export function validateStartBeforeEnd(date, startTime, endTime) {
  //return true or false
  var start = moment(`${date} ${startTime}:00`);
  var end = moment(`${date} ${endTime}:00`);
  return start.isBefore(end);
}

export function getRegularHoursWorked(date, startTime, endTime) {
  //all times should be converted to moment object per the moment docs
  var overTimeStopper = moment(`${date} 06:00:00`);
  var overTimeStarter = moment(`${date} 00:00:00`);
  var dateTimeStart = moment(`${date} ${startTime}:00`);
  var dateTimeEnd = moment(`${date} ${endTime}:00`);

  //if the startTime is before the overTime stopper, regular hours start at 6am
  //night overtime by default starts at 12am so no need to check if night is
  //after overtime starter because that would be the following date and a new job

  if (dateTimeStart.isBefore(overTimeStopper)) {
    var start = overTimeStopper;
  } else {
    var start = dateTimeStart;
  }

  var end = dateTimeEnd;
  var diffInMinutes = end.diff(start, "minutes");
  console.log(`regular hours worked is ${diffInMinutes / 60}`);
  return diffInMinutes / 60;
}

export function getNghtOverTimeHoursWorked(startTime, date) {
  var start = moment(`${date} ${startTime}:00`);
  var end = moment(`${date} 6:00:00`);
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
