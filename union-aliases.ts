/// Core Types supported by Typescript
// number, string, boolean, object, array
// tuple (A fixed type and fixed length array. e.g. ["a", 2]: [string, number])
// enum (Constant identifiers)
// any (Any kind of value can be assigned)
// union (Assign multi type values)
// Function and () => datatype
// unknown
// never

type Combinable = number | string;
type ResultType = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ResultType
) {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result;
  //   }
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
