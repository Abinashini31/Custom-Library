import { findByPredicate } from "../src/Search/findByPredicate";

describe("findByPredicate", () => {
  const users = [
    { id: 1, username: "vishnu_dev", active: true },
    { id: 2, username: "john_doe", active: false },
    { id: 3, username: "alice", active: true }
  ];

  test("finds user by predicate match", () => {
    const result = findByPredicate(users, (u) => u.id === 1);
    expect(result).toEqual({ id: 1, username: "vishnu_dev", active: true });
  });

  test("returns undefined if no match", () => {
    const result = findByPredicate(users, (u) => u.id === 999);
    expect(result).toBeUndefined();
  });

  test("finds first active user", () => {
    const result = findByPredicate(users, (u) => u.active === true);
    expect(result).toEqual({ id: 1, username: "vishnu_dev", active: true });
  });

  test("works with empty array", () => {
    const result = findByPredicate([], (u: any) => u.id === 1);
    expect(result).toBeUndefined();
  });
});