import { add, subtract, multiply, divide } from "./math";

test("Addition: 1 + 2 = 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("Subtraction: 5 - 3 = 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("Multiplication: 4 * 5 = 20", () => {
  expect(multiply(4, 5)).toBe(20);
});

test("Division: 10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("Division by zero throws error", () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
