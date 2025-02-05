const crypto=require('node:crypto')

console.log("Hello world!")

var a=79879;
var b=444;

// there is crypto is async and also manages by libUv
// pbkdf2-password base key deravative funtion

//sync function block the main thread - Don't USE IT!
crypto.pbkdf2Sync("password","salt",500000,50,"sha256")

console.log("key is generated in sync manner")

//async function
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Key is generated in async manner")
})

function multiplyFn(x,y){
    const result=x*y;
    return result;
}

var c=multiplyFn(a,b)

console.log(c)