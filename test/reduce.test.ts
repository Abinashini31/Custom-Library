import { reduce } from "../src/Foundation/foundation/reduce";


describe("reduce", () => {
  test("sum of numbers", () => {
    const result = reduce((acc, val) => acc + val, 0, [1, 2, 3, 4]);
    expect(result).toBe(10);
  });

  test("subtract left to right", () => {
    const result = reduce((acc, val) => acc - val, 100, [10, 5]);
    // (100 - 10) - 5 = 85
    expect(result).toBe(85);
  });

  test("empty array returns initial value", () => {
    const result = reduce((acc, val) => acc + val, 10, []);
    expect(result).toBe(10);
  });

  test("works with strings", () => {
    const result = reduce((acc, val) => acc + val, "", ["a", "b", "c"]);
    expect(result).toBe("abc");
  });
});