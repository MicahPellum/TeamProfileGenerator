const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("Micah", 5, "test@test.com");

  expect(employee.name).toBe("Micah");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("run getName function", () => {
  const employee = new Employee("Micah", 5, "test@test.com");

  expect(employee.getName()).toBe("Micah");
});

test("run getRole function", () => {
  const employee = new Employee("Micah", 5, "test@test.com");

  expect(employee.getRole()).toBe("Employee");
});