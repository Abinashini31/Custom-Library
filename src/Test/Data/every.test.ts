import { every } from "../../Lens/foundation/every";

describe("every", () => {
  test("returns true if all elements satisfy condition", () => {
    const result = every((x) => x > 0, [1, 2, 3, 4]);
    expect(result).toBe(true);
  });

  test("returns false if any element fails condition", () => {
    const result = every((x) => x > 0, [1, -2, 3]);
    expect(result).toBe(false);
  });

  test("works with objects (all true)", () => {
    const users = [
      { active: true },
      { active: true },
      { active: true }
    ];

    const result = every((u) => u.active === true, users);
    expect(result).toBe(true);
  });

  test("works with objects (one false)", () => {
    const users = [
      { active: true },
      { active: false },
      { active: true }
    ];

    const result = every((u) => u.active === true, users);
    expect(result).toBe(false);
  });

  test("empty array returns true (JS behavior)", () => {
    const result = every((x) => x > 0, []);
    expect(result).toBe(true);
  });
});