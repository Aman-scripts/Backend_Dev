//require("./path")
//like when i used require any module than node.js make all the code of the module inside the function
// All the code of the module is wrapped inside the function called (IIFE)
//IIFE called immediately invoked function expression

(function () {
  //all code of the module runs inside here
})();

// so node.js take your all code of the module and wrap it inside the function and than it will give it to V8 Engine
// like when you wrapped a function inside the parenthesis than that function is called expression
//  why IIFE :
// --immediately invoked the function
//--protect the variables and functions from leaking keep it private
//Ques How are vairable and funtions private in different modules Ans :IIFE
//How do you get access the module.exports coming from : node.js added the module .exports also the empty object

console.log("Hello I am in XYZ.js file");
export const test_xyz = "Hello I am in XYZ.js file";
