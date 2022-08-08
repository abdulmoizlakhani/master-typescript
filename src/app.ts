class Department {
  deptName: string;
  employees: string[] = [];

  constructor(n: string) {
    this.deptName = n;
  }

  describe(this: Department) {
    console.log("The department is: ", this.deptName);
  }

  addEmployee(empName: string) {
    this.employees.push(empName);
  }

  printEmployeeInfo() {
    console.log(this.employees, this.employees.length);
  }
}

const itDepartment = new Department("IT");

itDepartment.addEmployee("A. Moiz");
itDepartment.addEmployee("Lakhani")

itDepartment.employees[2] = "Test User"; // We should avoid this kind of data addition in real apps.

itDepartment.describe();
itDepartment.printEmployeeInfo();
