// async-await -- modern way of handling async calls/steps
// -used with promises
// async keyword -- before function name
// await keyword/operator: async steps

// example
/*
async function(){
    it will return a promise -mandatory --resolve/rejected
    step1 --sync - no need of await
    await step2 -async -time - await
    await step3 -async 
}
*/
// without await, all function will run parallel

/* function() {
-cannot write await step
} */
/**
 async function(){
    return 42; - wrapped 2 in the resolved promise and then return
 }

 async function(){
    throw new Error("msg"); - wrap the error in a rejected promise and return
 }

 async function(){
    - do not have any wait (async)  steps --YES
 }
 async function(){
    return new Promise(resolver()=>{
        return 43;
    })
 }
 */

// examples
// async function without await
async function f1() {
  console.log("this is async function without await step");
  return 42;
}
f1(); // this is async function without await step
f1().then((result) => {
  console.log(result);
});

/** output:
this is async function without await step
this is async function without await step
42
 */

// async function without await but with error

async function f2() {
  console.log("this is an async function with error");
  throw new Error("this is my error"); // return a promise
}

f2().catch((error) => {
  console.log(`the error message ${error}`); // the error message Error: this is my error
});

// // async function with a resolve/reject promise
function getInfo() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve(90);
      } else {
        reject(new Error("wrong value error"));
      }
    }, 2000);
  });
}

// create async function which is calling getInfo()
async function getNumberInfo() {
  try {
    const result = await getInfo(); // async step
    console.log("Result: ", result);
  } catch (error) {
    console.log("Error: ", error);
  }
}

// call function
getNumberInfo(); //Result:  90
