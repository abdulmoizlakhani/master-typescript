function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect Input!");
  }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let num1 = 5; // Error if "5"
const num2 = 8.5; // Error if "8.5"
const printResult = true;
const resultPhrase = "Result is: ";

add(num1, num2, printResult, resultPhrase);
