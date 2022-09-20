// function Logger(constructor: Function) {
//   console.log("Hey! logger here..");
//   console.log(constructor);
// }

function Logger(logString: string) {
  console.log("Logger Factory!");
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("withTemplate Factory!");
  return function(constructor: any) {
    console.log("This is template decorator!");
    const hookEl = document.getElementById(hookId);
    const text = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = text.name;
    }
  }
}

@Logger("Ready to rock!")
@WithTemplate("<h1>This is the Person!</h1>", "app")
class Person {
  name = "Abdul Moiz Lakhani";

  constructor() {
    console.log("Here is the new person!");
  }
}

const person = new Person();

console.log(person, "Person");
