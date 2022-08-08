"use strict";
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.deptName = n;
    }
    Department.prototype.describe = function () {
        console.log("The department is: ", this.deptName);
    };
    Department.prototype.addEmployee = function (empName) {
        this.employees.push(empName);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees, this.employees.length);
    };
    return Department;
}());
var itDepartment = new Department("IT");
itDepartment.addEmployee("A. Moiz");
itDepartment.addEmployee("Lakhani");
itDepartment.employees[2] = "Test User"; // We should avoid this kind of data addition in real apps.
itDepartment.describe();
itDepartment.printEmployeeInfo();
//# sourceMappingURL=app.js.map