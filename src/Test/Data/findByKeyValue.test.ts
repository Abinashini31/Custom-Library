import { findByKeyValue } from "../../Lens/Search/findByKeyValue";

describe("findByKeyValue", () => {
  const users = [
    { id: 1, username: "vishnu_dev", active: true },
    { id: 2, username: "john_doe", active: false },
    { id: 3, username: "alice", active: true }
  ];

  test("finds user by username", () => {
    const result = findByKeyValue(users, "username", "john_doe");
    expect(result).toEqual({ id: 2, username: "john_doe", active: false });
  });

  test("finds user by id", () => {
    const result = findByKeyValue(users, "id", 3);
    expect(result).toEqual({ id: 3, username: "alice", active: true });
  });

  test("returns undefined if key-value not found", () => {
    const result = findByKeyValue(users, "username", "not_exist");
    expect(result).toBeUndefined();
  });

  test("works with empty array", () => {
    const result = findByKeyValue([], "id", 1);
    expect(result).toBeUndefined();
  });
});