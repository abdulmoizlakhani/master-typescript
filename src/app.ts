class Department {
  //   deptName: string;
  private employees: string[] = [];

  constructor(private readonly deptId: string, public deptName: string) {
    this.deptId = deptId;
    this.deptName = deptName;
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

const itDepartment = new Department("Dept_01", "IT");

itDepartment.addEmployee("A. Moiz");
itDepartment.addEmployee("Lakhani");

// itDepartment.employees[2] = "Test User"; // We should avoid this kind of data addition in real apps.

itDepartment.describe();
itDepartment.printEmployeeInfo();
