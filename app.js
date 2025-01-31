require('./xyz')
// require('./sum')
// const calculateSum=require('./sum')
// const obj=require('./sum.js')
const {x,calculateSum}=require('./sum.js')
// you cannot access variables and methods functions of one module into another by the used of require
//modules protects their variables and functions from leaking
// globalThis introduced in ES2020 now called the global variable
// windows is a global object when V8 engine created by the browser
// console.log(global);// Global object is global having setInterval,ClearInterval,ClearTimeout, when node.js created it called global
// console.log(this);//empty object {}
// console.log(self)// when webworkers created than global object called self
// console.log(frames)

// console.log(globalThis);//global object



var name="Amandeep";
var a=10;
var b=20;
// obj.calculateSum(a,b);
calculateSum(a,b)
console.log(x)
// console.log(obj.x)
 console.log(globalThis===global)