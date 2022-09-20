function Logger(constructor: Function) {
  console.log("Hey! logger here..");
  console.log(constructor);
}

@Logger
class Person {
  name = "Abdul Moiz Lakhani";

  constructor() {
    console.log("Here is the new person!");
  }
}

const person = new Person();

console.log(person, "Person");