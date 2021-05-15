const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates a Intern object", () => {
  const intern = new Intern("Micah", 5, "test@test.com", "UofU");

  expect(intern.name).toBe("Micah");
});

test("run getName function", () => {
  const intern = new Intern("Micah", 5, "test@test.com", "UofU");

  expect(intern.getName()).toBe("Micah");
});

test("run getSchool function", () => {
  const intern = new Intern("Micah", 5, "test@test.com", "UofU");

  expect(intern.getSchool()).toBe("UofU");
});