const Employee = require("/Users/colint771/bootcamp/team-profile-generator/lib/Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}

module.exports = Intern;