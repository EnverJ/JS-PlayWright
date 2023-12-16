// var 1. old way
//ES6
// SCOPE:VAR
// Functionally/locally + global scope

var x = 10;
function test() {
  var y = 20;
}
console.log(x);

var pop = "hi is";
function rel() {
  var top = "hello js";
}
rel();
//console.log(top);
//
// ReferenceError: top is not defined

var browser = "chrome";
var browser = "firefox";
browser = "edge";
console.log(browser);

// issue with var
var flag = "hey enver";
var t1 = 4;
if (t1 > 3) {
  var flag = "hi tom";
}
console.log(flag); // hi tom. "hey enver" lost

// let
// scope: block {}
let m = "Hey enver";
let time = 4;
if (time > 3) {
  let mes = "hwo are you";
  console.log(mes);
}
//console.log(mes); // mes is not defined
console.log(m); // Hey enver
let len = 4;
len = 5;
console.log(len); //5

// const  is like final keyword in java
const mg = "hey nave";
// mg = "hi, john";
//console.log(mg); // TypeError: Assignment to constant variable.

const num = 7;
console.log(100 * num); // 700
// num = 10;
// console.log(100 * num);
// num = 10;
//^

//TypeError: Assignment to constant variable.

var p;
console.log(p); // undefined
let l;
console.log(l); // undefined
// const h;
// console.log(h)  // SyntaxError: Missing initializer in const declaration
