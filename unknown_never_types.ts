// Unknown Type is little strict than any

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Abdul Moiz";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
