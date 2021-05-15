const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Micah", 5, "test@test.com");

  expect(manager.name).toBe("Micah");
});

test("run getName function", () => {
  const manager = new Manager("Micah", 5, "test@test.com");

  expect(manager.getName()).toBe("Micah");
});