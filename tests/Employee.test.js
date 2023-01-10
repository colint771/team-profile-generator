const Employee = require("/Users/colint771/bootcamp/team-profile-generator/lib/Employee.js");

test("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Colin";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Colin", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "colint771@gmail.com";
    const employeeInstance = new Employee ("Colin", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Get name with getName method.", () => {
    const testName = "Colin";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Get ID with getID method", () => {
    const testID = 2;
    const employeeInstance = new Employee("Colin", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Tests email with getEmail method", () => {
    const testEmail = "colint771@gmail.com";
    const employeeInstance = new Employee("Colin", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);

})

test("role test.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Colin", 2, "colint771@gmail.com")
})