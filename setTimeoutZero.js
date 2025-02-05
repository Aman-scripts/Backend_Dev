console.log("Hello world!")

var a=79879;
var b=444;

//once the callstack is empty than only these asyn task is going to pushed into the callstack
setTimeout(()=>{
    console.log("call me right now asap")
},0)//Trust issues with setTimeout

setTimeout(()=>{
    console.log("call me after 3 sec")
},3000)

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b)

console.log(c)