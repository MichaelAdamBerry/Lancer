import {
  defaultOvertime,
  defaultDayRate,
  createClientObject
} from "./formFunctions";

const fakeClientData = {
  clientName: "testName",
  contactName: "testContactName",
  phone: "testPhoneNum",
  hrRate: "10",
  dayRate: "100",
  otRate: "15",
  other: "otherSuff",
  random: "should not be included"
};

test("defaultOvertime should return product 1.5 * hrRate as a string", () => {
  expect(defaultOvertime(10)).toBe("15");
});

test("defaultDayRate should return product of 10 * dayRate as a string", () => {
  expect(defaultDayRate(10)).toBe("100");
});

test("createClientObject should create a correct Object", () => {
  expect(createClientObject(fakeClientData)).toEqual({
    clientName: "testName",
    contactName: "testContactName",
    phone: "testPhoneNum",
    hrRate: "10",
    dayRate: "100",
    otRate: "15"
  });
});
