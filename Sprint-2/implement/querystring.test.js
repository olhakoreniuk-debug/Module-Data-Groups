// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses multiple querystring parameters", () => {
  expect(parseQueryString("name=Olha&language=JavaScript")).toEqual({
    name: "Olha",
    language: "JavaScript",
  });
});

test("returns an empty object for an empty querystring", () => {
  expect(parseQueryString("")).toEqual({});
});

test("accepts a leading question mark", () => {
  expect(parseQueryString("?page=2&sort=name")).toEqual({
    page: "2",
    sort: "name",
  });
});

test("uses an empty string when a parameter has no value", () => {
  expect(parseQueryString("search=&debug")).toEqual({
    search: "",
    debug: "",
  });
});
