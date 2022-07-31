/// Core Types supported by Typescript
// number, string, boolean, object, array
// tuple (A fixed type and fixed length array. e.g. ["a", 2]: [string, number])
// enum (Constant identifiers)
// any (Any kind of value can be assigned)
// union (Assign multi type values)
// Function and () => datatype
// unknown
// never

// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Abdul Moiz",
//   age: 26,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR,
}

const person = {
  name: "Abdul Moiz",
  age: 26,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ["Sports"];

// person.role.push("new string") // Pushing is allowed in tuple
// person.role[1] = 2; // Wrong type error
// person.role = [2, "a", 'v']; // Catches length error

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("It's admin");
}
