// 1. This function should only accept strings and return a string
function greet(name: string): string {
  return "Hello, " + name;
}

// 2. Declare a variable that holds a user's age (no value yet — just declare it)
let userAge: number;

// 3. This function should take two numbers and return a boolean
function isGreaterThan(a: number, b: number): boolean {
  return a > b;
}

let valueAny: any = "hello";
valueAny.toUpperCase();

let valueUnkown: unknown = "helllo";
// valueUnkown.toUpperCase();

if (typeof valueUnkown === "string") {
  valueUnkown.toUpperCase();
}

function throwError(message:string): never{
    throw new Error(message)
}

//Literal Types
let directions : "left" | "right";
directions = "left";
directions = "right";
// directions = "up"

const input = document.getElementById('username') as HTMLInputElement;
input.value

function logMessage(message: string) : void{
    console.log(message)
}