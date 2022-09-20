"use strict";
// function Logger(constructor: Function) {
//   console.log("Hey! logger here..");
//   console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log("Logger Factory!");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("withTemplate Factory!");
    return function (constructor) {
        console.log("This is template decorator!");
        const hookEl = document.getElementById(hookId);
        const text = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = text.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Abdul Moiz Lakhani";
        console.log("Here is the new person!");
    }
};
Person = __decorate([
    Logger("Ready to rock!"),
    WithTemplate("<h1>This is the Person!</h1>", "app")
], Person);
const person = new Person();
console.log(person, "Person");
//# sourceMappingURL=app.js.map