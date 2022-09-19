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
function countAndDescribe(element) {
    var desc = "No Value!";
    if (element.length === 1) {
        desc = "Only 1 Element!!";
    }
    else if (element.length > 1) {
        desc = "This time " + element.length + " elements.";
    }
    return [element, desc];
}
console.log(countAndDescribe("Test"));
//# sourceMappingURL=app.js.map