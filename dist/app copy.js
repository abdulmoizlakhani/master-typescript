"use strict";
var Department = /** @class */ (function () {
    function Department(deptId, deptName) {
        this.deptId = deptId;
        this.deptName = deptName;
        //   deptName: string;
        this.employees = [];
        this.deptId = deptId;
        this.deptName = deptName;
    }
    Department.prototype.describe = function () {
        console.log("The department is: ", this.deptId, this.deptName);
    };
    Department.prototype.addEmployee = function (empName) {
        this.employees.push(empName);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees, this.employees.length);
    };
    return Department;
}());
var itDepartment = new Department("Dept_01", "IT");
itDepartment.addEmployee("A. Moiz");
itDepartment.addEmployee("Lakhani");
// itDepartment.employees[2] = "Test User"; // We should avoid this kind of data addition in real apps.
itDepartment.describe();
itDepartment.printEmployeeInfo();
//# sourceMappingURL=app%20copy.js.map