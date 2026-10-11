// Named function — annotate each param and the return type
function add(a:number, b:number):number{
    return a +b ;
}

// Arrow function — same idea, different syntax
const multiply = (a:number, b:number):number => a*b;

// String in, string out
function greet(name:string):string{
    return `Hello ${name}`
}

// No return value → void
function logMessage(message:string):void{
    console.log(message)
}

function fail(message:string) : never{
    throw new Error(message)
}


//// You don't HAVE to write the return type — TypeScript infers it
function subtract(a:number, b:number){
    return a-b    // TypeScript infers return type: number
}

function getUserName(user:{name:string}){
    return user.name  // TypeScript infers: string
}


//// A function type alias describes the shape of a function
// Syntax: (paramName: Type) => ReturnType
type MathOperation = (a:number, b:number) => number;
type Formatter = (value:string) => string;
type Logger = (message:string) => void;

const addition:MathOperation= (a,b) => a+b;
const textConverter:Formatter = (value) => value.toUpperCase();
const logMyMessage:Logger = (message) => console.log(message) 

//// Functions stored in objects
type User ={
    name:string,
    greet: (greeting:string)=> string;
}
const user:User ={
    name:"Rakesh",
    greet:(greeting) => `${greeting} Alice`
}