export function defaultOvertime(hrRate) {
  const rate = hrRate * 1.5;
  return rate.toString();
}

export function defaultDayRate(hrRate) {
  const rate = hrRate * 10;
  return rate.toString();
}

export function createClientObject(obj) {
  return {
    clientName: obj.clientName,
    contactName: obj.contactName,
    phone: obj.phone,
    hrRate: obj.hrRate,
    dayRate: obj.dayRate,
    otRate: obj.otRate
  };
}

//export function PhoneNumber() {}
//function validateHours
//function
