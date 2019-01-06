import * as utils from "./myJobFunctions";

var jobWithNet = {
  net: 25,
  other: 1000,
  stuff: "lkjafhda"
};

var jobWithoutNet = {
  other: 34132,
  stuff: ";ldahfad",
  estNet: 12.0003
};

test("renderNet should return equal object", () => {
  expect(utils.renderNet(25)).toEqual({
    string: "$25.00",
    style: { fontWeight: "bold" }
  });
});

test("renderEstimatedNet should return equal object", () => {
  expect(utils.renderEstimatedNet(25)).toEqual({
    string: "$25.00",
    style: { color: "red", fontStyle: "italic" }
  });
});

test("renderPaymentTD should return with net string value and style ", () => {
  expect(utils.renderPaymentTD(jobWithNet)).toEqual({
    string: "$25.00",
    style: { fontWeight: "bold" }
  });
});

test("renderPaymentTD should return with estNet string value and style ", () => {
  expect(utils.renderPaymentTD(jobWithoutNet)).toEqual({
    string: "$12.00",
    style: { color: "red", fontStyle: "italic" }
  });
});
