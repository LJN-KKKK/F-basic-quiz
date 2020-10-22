import { describe, test } from "@jest/globals";
import getUser from "../api/user";

// TODO GTB-测试 - 因为没有mock,所以单元测试写成了e2e测试，导致的问题是我不起后端的API，测试就是挂掉的
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
