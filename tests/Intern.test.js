const Intern = require("lib/Intern.js");

test("enter school", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Colin", 2, "colint771@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool)
});

test("officeNumber test to return office Number", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Colin", 2, "colint771@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool)
});

test("Role test", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Colin", 2, "colint771@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue)
});