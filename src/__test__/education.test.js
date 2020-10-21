import { describe, test } from "@jest/globals";
import getEducation from "../api/education";

describe("getEducation", () => {
  test("should get user's education when education exist", async () => {
    const education = [
      { description: "111", title: "111", userId: 1, year: 2121 },
    ];
    const result = await getEducation(1);
    await expect(result).toEqual(education);
  });
});
