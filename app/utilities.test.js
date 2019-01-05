import * as utils from "./utilities";

test("formatMobileDate should formatedate m/d/yy", () => {
  expect(utils.formatMobileDate("2019-01-02")).toBe("1/2/19");
});
