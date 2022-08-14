class Department {
  //   deptName: string;
  protected employees: string[] = [];
  static fiscalYear = 2022;

  constructor(public readonly deptId: string, public deptName: string) {
    this.deptId = deptId;
    this.deptName = deptName;
  }

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log("The department is: ", this.deptId, this.deptName);
  }

  addEmployee(empName: string) {
    this.employees.push(empName);
  }

  printEmployeeInfo() {
    console.log(this.employees, this.employees.length);
  }
}

// abstract class Department {
//   //   deptName: string;
//   protected employees: string[] = [];
//   static fiscalYear = 2022;

//   constructor(protected readonly deptId: string, public deptName: string) {
//     this.deptId = deptId;
//     this.deptName = deptName;
//   }

//   static createEmployee(name: string) {
//     return { name };
//   }

//   abstract describe(this: Department): void;

//   addEmployee(empName: string) {
//     this.employees.push(empName);
//   }

//   printEmployeeInfo() {
//     console.log(this.employees, this.employees.length);
//   }
// }

class ITDepartment extends Department {
  constructor(deptId: string, public admins: string[]) {
    super(deptId, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("The department is: ", this.deptId, this.deptName);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(deptId: string, private reports: string[]) {
    super(deptId, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance(deptId: string, reports: string[]) {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(deptId, reports);
    return this.instance;
  }

  describe() {
    console.log("The department is: ", this.deptId, this.deptName);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found!");
  }

  set mostRecentReport(report: string) {
    if (!report) {
      throw new Error("Please pass a valid value!");
    }
    this.addReport(report);
  }

  addEmployee(empName: string) {
    if (empName === "John Doe") return;
    this.employees.push(empName);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const itDepartment = new ITDepartment("DEPT_IT_01", ["Lakhani", "Abdul Moiz"]);
const accountingDepartment = AccountingDepartment.getInstance(
  "DEPT_ACC_01",
  []
);
const accountingDepartment2 = AccountingDepartment.getInstance(
  "DEPT_ACC_02",
  []
);

// accountingDepartment.addEmployee("Abdul Moiz");
// accountingDepartment.addEmployee("John Doe");
// accountingDepartment.addReport("Test Report 01");
// accountingDepartment.printReports();

// accountingDepartment.mostRecentReport = "Test Report 02";

itDepartment.describe();
// accountingDepartment.describe();

console.log(itDepartment, accountingDepartment, accountingDepartment2);
console.log(accountingDepartment.mostRecentReport);
console.log(Department.createEmployee("A. Moiz"), Department.fiscalYear);
