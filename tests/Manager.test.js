const Manager = require("lib/Manager.js");

test("create an office number", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Colin", 2, "colint771@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("office number test to return office number", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("Colin", 2, "colint771@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber)
});

test("role test", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Colin", 2, "colint771@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue)
});