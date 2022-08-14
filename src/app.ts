// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  // readonly outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// type Greetable = {
//   readonly name: string;

//   greet(phrase: string): void;
// };

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }

  greet(phrase: string): void {
    console.log(phrase, this.name);
  }
}

let user1: Greetable;

user1 = new Person("Abdul", 26);
// user1.name = "Test User"; Can't update due to readonly

user1.greet("Hello, it's");
