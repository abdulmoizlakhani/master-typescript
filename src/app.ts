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

function merge<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

// const data = merge<{name: string}, {age: number}>({ name: "Abdul Moiz Lakhani" }, { age: 26 });
const data = merge({ name: "Abdul Moiz Lakhani" }, { age: 26 });

console.log(data.name, data.age);
