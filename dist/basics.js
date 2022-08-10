"use strict";
var Depart = /** @class */ (function () {
    function Depart(deptId, deptName) {
        this.deptId = deptId;
        this.deptName = deptName;
        //   deptName: string;
        this.employees = [];
        this.deptId = deptId;
        this.deptName = deptName;
    }
    Depart.prototype.describe = function () {
        console.log("The depart is: ", this.deptId, this.deptName);
    };
    Depart.prototype.addEmployee = function (empName) {
        this.employees.push(empName);
    };
    Depart.prototype.printEmployeeInfo = function () {
        console.log(this.employees, this.employees.length);
    };
    return Depart;
}());
var itDepart = new Depart("Dept_01", "IT");
itDepart.addEmployee("A. Moiz");
itDepart.addEmployee("Lakhani");
// itDepart.employees[2] = "Test User"; // We should avoid this kind of data addition in real apps.
itDepart.describe();
itDepart.printEmployeeInfo();
//# sourceMappingURL=basics.js.map