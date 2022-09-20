// function Logger(constructor: Function) {
//   console.log("Hey! logger here..");
//   console.log(constructor);
// }

// function Logger(logString: string) {
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

function withTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const text = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = text.name;
    }
  }
}

@withTemplate("<h1>This is the Person!</h1>", "app")
class Person {
  name = "Abdul Moiz Lakhani";

  constructor() {
    console.log("Here is the new person!");
  }
}

const person = new Person();

console.log(person, "Person");
