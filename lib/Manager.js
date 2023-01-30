const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // ?? how to import methods from parent? e.g. super(getInfo)? super.getInfo()? no need
    // ?? is the below sufficient to override the parent getRole method? yes

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'