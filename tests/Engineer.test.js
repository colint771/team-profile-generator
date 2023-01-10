const Engineer = require("lib/Engineer.js");

test("github creation", () => {
    const testGithub = "colint771";
    const employeeInstance = new Engineer("Colin", 2, "colint771@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Github to return github test", () => {
    const testGithub = "colint771";
    const employeeInstance = new Engineer("Colin", 2, "colint771@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub)
});

test("Role test", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Colin", 2, "colint771@gmail.com", "colint771");
    expect(employeeInstance.getRole()).toBe(returnValue)
});