//by defaut module are protected their variables and functions from leaking
//you can used it by exporting functions 

console.log("sum module is executed")
function calculateSum(a,b){
    const sum=a+b;
    console.log(sum);
}

var x="hello x"

// module.exports=calculateSum;
module.exports={
    calculateSum:calculateSum,
    x:x,
}