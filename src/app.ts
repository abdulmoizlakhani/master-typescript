// const names: Array<string> = []; // string[]
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

// const data = merge<{name: string}, {age: number}>({ name: "Abdul Moiz Lakhani" }, { age: 26 });
// const data = merge({ name: "Abdul Moiz Lakhani" }, 33); // It will fail because 2nd argument is not an object
// const data = merge({ name: "Abdul Moiz Lakhani" }, { age: 26 });

// console.log(data.name, data.age);

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let desc = "No Value!";
//   if (element.length === 1) {
//     desc = "Only 1 Element!!";
//   } else if (element.length > 1) {
//     desc = "This time " + element.length + " elements.";
//   }
//   return [element, desc];
// }

// console.log(countAndDescribe("Test"));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value: " + obj[key];
// }

// console.log(extractAndConvert({ title: "Product 1" }, "title"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

// const dataStorage = new DataStorage<string>();
// dataStorage.addItem("John");
// dataStorage.addItem("Doe");
// dataStorage.removeItem("John");

// console.log(dataStorage);

// const dataStorage = new DataStorage<number>();
// dataStorage.addItem(20);
// dataStorage.addItem(30);
// dataStorage.removeItem(30);

// console.log(dataStorage);

const dataStorage = new DataStorage<number | string>();
dataStorage.addItem("John");
dataStorage.addItem(30);
dataStorage.removeItem(30);

console.log(dataStorage);

// const objDataStorage = new DataStorage<object>();
// objDataStorage.addItem({ n: "a" });
// objDataStorage.addItem({ b: 2 });
// objDataStorage.removeItem({});

// console.log(objDataStorage);

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["John", "Doe"];
// names.push("Jack");
// names.pop("Jack");
