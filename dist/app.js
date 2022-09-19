"use strict";
// const names: Array<string> = []; // string[]
// // names[0].split(" ");
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 2000);
// });
// promise.then((data) => {
//   console.log(data);
// });
function merge(obj1, obj2) {
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
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItem = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
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
var dataStorage = new DataStorage();
dataStorage.addItem("John");
dataStorage.addItem(30);
dataStorage.removeItem(30);
console.log(dataStorage);
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var names = ["John", "Doe"];
// names.push("Jack");
// names.pop("Jack");
//# sourceMappingURL=app.js.map