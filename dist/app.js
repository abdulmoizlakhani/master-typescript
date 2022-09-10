"use strict";
var e1 = {
    name: "Abdul Moiz",
    privileges: ["ALL_ACCESS"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var resultNumber = add(7, 7);
var resultString = add("Abdul Moiz", " Lakhani"); // but it's not optimal
resultString.split(" ");
function printEmployeeInformation(emp) {
    console.log("Name: ", emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: ", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: ", emp.startDate);
    }
}
printEmployeeInformation(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving a car!");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck!");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading cargo: ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed = 0;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            break;
    }
    console.log("Moving with speed: ", speed);
}
moveAnimal({
    type: "horse",
    runningSpeed: 200,
});
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input")! as HTMLInputElement;
var userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "This is user input!";
}
var errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!"
};
//# sourceMappingURL=app.js.map