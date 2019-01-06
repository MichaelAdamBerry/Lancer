import * as utils from "./jobFunctions";

test("returns true if start time is before end time ", () => {
  expect(utils.validateStartBeforeEnd("2019-01-01", "00:00", "01:00")).toBe(
    true
  );
});

test("returns false if start time is after end time ", () => {
  expect(utils.validateStartBeforeEnd("2019-01-01", "04:00", "01:00")).toBe(
    false
  );
});
