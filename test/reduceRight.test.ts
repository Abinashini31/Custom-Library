import { reduceRight } from "../src/Foundation/foundation/reduceright";


describe("reduceRight", () => {
  test("subtract right to left", () => {
    const result = reduceRight((acc, val) => acc - val, 100, [10, 5]);
    // (100 - 5) - 10 = 85
    expect(result).toBe(85);
  });

  test("concatenation right to left", () => {
    const result = reduceRight((acc, val) => acc + val, "", ["a", "b", "c"]);
    expect(result).toBe("cba");
  });

  test("single element array", () => {
    const result = reduceRight((acc, val) => acc + val, 10, [5]);
    expect(result).toBe(15);
  });

  test("empty array returns initial value", () => {
    const result = reduceRight((acc, val) => acc + val, 0, []);
    expect(result).toBe(0);
  });
});