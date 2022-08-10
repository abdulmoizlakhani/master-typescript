"use strict";
// class Department {
//   //   deptName: string;
//   protected employees: string[] = [];
//   static fiscalYear = 2022;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   constructor(private readonly deptId: string, public deptName: string) {
//     this.deptId = deptId;
//     this.deptName = deptName;
//   }
//   static createEmployee(name: string) {
//     return { name };
//   }
//   describe(this: Department) {
//     console.log("The department is: ", this.deptId, this.deptName);
//   }
//   addEmployee(empName: string) {
//     this.employees.push(empName);
//   }
//   printEmployeeInfo() {
//     console.log(this.employees, this.employees.length);
//   }
// }
var Department = /** @class */ (function () {
    function Department(deptId, deptName) {
        this.deptId = deptId;
        this.deptName = deptName;
        //   deptName: string;
        this.employees = [];
        this.deptId = deptId;
        this.deptName = deptName;
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (empName) {
        this.employees.push(empName);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees, this.employees.length);
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(deptId, admins) {
        var _this = _super.call(this, deptId, "IT") || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("The department is: ", this.deptId, this.deptName);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(deptId, reports) {
        var _this = _super.call(this, deptId, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.describe = function () {
        console.log("The department is: ", this.deptId, this.deptName);
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found!");
        },
        set: function (report) {
            if (!report) {
                throw new Error("Please pass a valid value!");
            }
            this.addReport(report);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (empName) {
        if (empName === "John Doe")
            return;
        this.employees.push(empName);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var itDepartment = new ITDepartment("DEPT_IT_01", ["Lakhani", "Abdul Moiz"]);
var accountingDepartment = new AccountingDepartment("DEPT_ACC_01", []);
accountingDepartment.addEmployee("Abdul Moiz");
accountingDepartment.addEmployee("John Doe");
accountingDepartment.addReport("Test Report 01");
accountingDepartment.printReports();
accountingDepartment.mostRecentReport = "Test Report 02";
itDepartment.describe();
accountingDepartment.describe();
console.log(itDepartment, accountingDepartment);
console.log(accountingDepartment.mostRecentReport);
console.log(Department.createEmployee("A. Moiz"), Department.fiscalYear);
//# sourceMappingURL=app.js.map