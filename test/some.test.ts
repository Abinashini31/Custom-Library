import { some } from "../src/Foundation/foundation/some";

describe("some", () => {
  test("returns true if any element matches condition", () => {
    const users = [
      { role: "user" },
      { role: "admin" },
      { role: "guest" }
    ];

    const result = some((u) => u.role === "admin", users);
    expect(result).toBe(true);
  });

  test("returns false if no element matches", () => {
    const result = some((x) => x > 10, [1, 2, 3]);
    expect(result).toBe(false);
  });

  test("empty array returns false", () => {
    const result = some((x) => x > 0, []);
    expect(result).toBe(false);
  });
});