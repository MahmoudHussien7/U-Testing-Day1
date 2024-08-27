import { add, substract, multiply, isEven, isOdd } from "./utils";

test("add function should return the sum of two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("multiply function should return the product of two numbers", () => {
  expect(substract(2, 3)).toBe(-1);
});
test("multiplies 3 * 4 to equal 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("checks if 4 is even", () => {
  expect(isEven(7)).toBe(false);
});

test("checks if 5 is odd", () => {
  expect(isOdd(5)).toBe(true);
});
