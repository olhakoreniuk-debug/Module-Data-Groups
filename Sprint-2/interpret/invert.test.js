const invert = require("./invert.js");

test("swaps one key and value", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
});

test("swaps multiple keys and values", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
});

test("returns an empty object for an empty object", () => {
  expect(invert({})).toEqual({});
});
