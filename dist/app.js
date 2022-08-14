"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
// type Greetable = {
//   readonly name: string;
//   greet(phrase: string): void;
// };
var Person = /** @class */ (function () {
    function Person(n, age) {
        this.name = n;
        this.age = age;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase, this.name);
    };
    return Person;
}());
var user1;
user1 = new Person("Abdul", 26);
// user1.name = "Test User"; Can't update due to readonly
user1.greet("Hello, it's");
//# sourceMappingURL=app.js.map