const Employee = require('../lib/Employee');
const assert = require('assert');

describe('Employee', () => {
    it('should return the correct name', () => {
        const employee = new Employee("William", 1, "test@test.com");
        assert.equal(employee.getName(), 'William');
    });

    it('should return the correct id', () => {
        const employee = new Employee('William', 1, 'test@test.com');
        assert.equal(employee.getId(), 1);
    });

    it('should return the correct email', () => {
        const employee = new Employee('William', 1, 'test@test.com');
        assert.equal(employee.getEmail(), 'test@test.com');
    });

    it('should return the correct role', () => {
        const employee = new Employee('William', 1, 'test@test.com');
        assert.equal(employee.getRole(), 'Employee');
    });
});