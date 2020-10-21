import { describe, test } from "@jest/globals";
import getUser from "../api/user";

describe("getUser", () => {
  test("should get user when user exist", async () => {
    const user = {
      age: 12,
      avatar: "111",
      description: "no desc",
      id: 1,
      name: "111",
    };
    const result = await getUser(1);
    await expect(result).toEqual(user);
  });
});
