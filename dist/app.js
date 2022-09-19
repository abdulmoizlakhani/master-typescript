"use strict";
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
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
// const data = merge<{name: string}, {age: number}>({ name: "Abdul Moiz Lakhani" }, { age: 26 });
var data = merge({ name: "Abdul Moiz Lakhani" }, { age: 26 });
console.log(data.name, data.age);
//# sourceMappingURL=app.js.map