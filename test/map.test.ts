import { map } from "../src/Foundation/foundation/map";

describe("map()", () => {

  test("transforms values correctly", () => {
    const arr = [1, 2, 3, 4];

    const result = map(x => x * 2, arr);

    expect(result).toEqual([2, 4, 6, 8]);
  });

  test("returns empty array if input is empty", () => {
    const arr: number[] = [];

    const result = map(x => x * 2, arr);

    expect(result).toEqual([]);
  });

  test("does not mutate original array", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];

    map(x => x * 2, arr);

    expect(arr).toEqual(copy);
  });

  test("passes index correctly", () => {
    const arr = [10, 20, 30];

    const result = map((x, i) => i, arr);

    expect(result).toEqual([0, 1, 2]);
  });

});