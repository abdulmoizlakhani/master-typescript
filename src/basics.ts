class Depart {
  //   deptName: string;
  private employees: string[] = [];

  constructor(private readonly deptId: string, public deptName: string) {
    this.deptId = deptId;
    this.deptName = deptName;
  }

  describe(this: Depart) {
    console.log("The depart is: ", this.deptId, this.deptName);
  }

  addEmployee(empName: string) {
    this.employees.push(empName);
  }

  printEmployeeInfo() {
    console.log(this.employees, this.employees.length);
  }
}

const itDepart = new Depart("Dept_01", "IT");

itDepart.addEmployee("A. Moiz");
itDepart.addEmployee("Lakhani");

// itDepart.employees[2] = "Test User"; // We should avoid this kind of data addition in real apps.

itDepart.describe();
itDepart.printEmployeeInfo();
