// function Logger(constructor: Function) {
//   console.log("Hey! logger here..");
//   console.log(constructor);
// }

function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Person Class - Logging")
class Person {
  name = "Abdul Moiz Lakhani";

  constructor() {
    console.log("Here is the new person!");
  }
}

const person = new Person();

console.log(person, "Person");
