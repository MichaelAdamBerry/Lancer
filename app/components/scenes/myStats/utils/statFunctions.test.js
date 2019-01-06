import * as utils from "./statFunctions";
import moment from "moment";

var now = moment().format("YYYY-MM-DD");

//TODO make date of first object a variable representing the curren month
var fakeJobArray = [
  {
    client: "SBI",
    clientObj: {
      clientName: "SBI",
      contactName: "Zainab",
      dayRate: "450",
      hrRate: "30",
      id: "RnACqXQFgdu5hphGT76W",
      otRate: "45",
      phone: "201-993-8413"
    },
    date: now,
    endTime: "23:59",
    estNet: 83.64999999999999,
    gross: 119.5,
    id: "38yOxLmEvWU9Ar9Ja0xg",
    location: "Grand Central",
    net: 85,
    notes: "Kiosk strike",
    overTimeHours: 0,
    paid: false,
    rate: "Hourly",
    regularHours: 3.9833333333333334,
    startTime: "20:00"
  },
  {
    client: "Rooftop2",
    clientObj: {
      clientName: "Rooftop2",
      contactName: "Kaite",
      dayRate: "300",
      hrRate: "30",
      id: "yERTCT2xRynoBAUZRjUy",
      otRate: "45",
      phone: ""
    },
    date: "2019-01-11",
    endTime: "18:00",
    estNet: 441,
    gross: 630,
    id: "8hnNec9g1FT9xorP4GJC",
    location: "Natural History Museum",
    notes: "",
    overTimeHours: 6,
    rate: "Hourly",
    regularHours: 12,
    startTime: "08:00"
  }
];

test("calculateSumOfPendingGross should return sum of gross", () => {
  expect(utils.calculateSumOfPendingGross(fakeJobArray)).toBe(749.5);
});

test("calculateSumOfPendingEstNet should sum of all estNet", () => {
  expect(utils.calculateSumOfPendingEstNet(fakeJobArray)).toBe(524.65);
});

test("calculateNetYearToDate should return sum of all net within last calendar year", () => {
  expect(utils.calculateNetYearToDate(fakeJobArray)).toBe(85);
});

test("calculateNetMonthToDate should return sum of all net within last Month", () => {
  expect(utils.calculateNetMonthToDate(fakeJobArray)).toBe(85);
});

test("isInSameCalendarYear(now) should return true", () => {
  expect(utils.isInSameCalendarYear(now)).toBe(true);
});

test("isInSameCalendarYear should return false", () => {
  expect(utils.isInSameCalendarYear("2018-12-30")).toBe(false);
});

test("isInSameCalendarMonth(now) should return true", () => {
  expect(utils.isInSameCalendarMonth(now)).toBe(true);
});

test("isInSameCalendarMonth should return false", () => {
  expect(utils.isInSameCalendarMonth("2018-12-30")).toBe(false);
});
