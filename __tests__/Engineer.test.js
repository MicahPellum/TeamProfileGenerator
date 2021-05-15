const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates a Engineer object", () => {
  const engineer = new Engineer("Micah", 5, "test@test.com", "test@github");

  expect(engineer.name).toBe("Micah");
});

test("run getName function", () => {
  const engineer = new Engineer("Micah", 5, "test@test.com", "test@github");

  expect(engineer.getName()).toBe("Micah");
});

test("run getGithub function", () => {
  const engineer = new Engineer("Micah", 5, "test@test.com", "test@github");

  expect(engineer.getGithub()).toBe("test@github");
});