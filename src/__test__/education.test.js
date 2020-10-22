import { describe, test } from "@jest/globals";
import getEducation from "../api/education";

// TODO GTB-测试: - 因为没有mock API调用,所以单元测试写成了e2e测试，导致的问题是我不起后端的API，测试就是挂掉的

describe("getEducation", () => {
  test("should get user's education when education exist", async () => {
    const education = [
      { description: "111", title: "111", userId: 1, year: 2121 },
    ];
    const result = await getEducation(1);
    await expect(result).toEqual(education);
  });
});
