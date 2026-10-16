const obj = require("./sum.js");

require("./xyz.js")
var name ="Namaste NodejS";
console.log(name);
var a=20;
var b=30;
obj.calculateSum(a,b);
console.log(obj.x);
console.log(a+b);
// console.log(global);
//console.log(globalThis === global)