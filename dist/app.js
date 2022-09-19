"use strict";
var names = []; // string[]
// names[0].split(" ");
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(100);
    }, 2000);
});
promise.then(function (data) {
    console.log(data);
});
//# sourceMappingURL=app.js.map