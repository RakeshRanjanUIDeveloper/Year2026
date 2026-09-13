
//A tuple is a typed array with a fixed length where each index holds a specific type. 

let person: [string, number] = ["Rakesh", 36]
const [userName, userAge] = person;
console.log(userName.toUpperCase());
console.log(userAge.toFixed(0))


type Employee = [name:String, id:number, isActive:boolean];
let emp:Employee= ["Bob", 101, true]


type Config = [host: string, port?:number];
let c1:Config= ["localhost"];
let c2:Config= ["localhost", 3000];

