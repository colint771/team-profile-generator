const Employee = require("lib/Employee.js");

class Manager extends Employee {
    constructor (name, id, email, officceNumber) {
        super (name, id, email);
        this.officceNumber = officceNumber;
    }

    getOfficeNumber() {
        return this.officceNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;