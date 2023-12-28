const name = "John";
// backticks => ``
const age = 30;
// vars: ${varname}

const msg = `hello, my name is ${name} and age is ${age}`;
console.log(msg); // hello, my name is John and age is 30

const multiLine = `Hi, This is my javascript code
and i am so happy
and i want to be perfect in js`;
console.log(multiLine);

/**
 * Hi, This is my javascript code
and i am so happy
and i want to be perfect in js
 */

const a = 10;
const b = 20;
const result = `the addition of ${a} and ${b} is ${a + b}`;
console.log(result); // the addition of 10 and 20 is 30

function getXpath(name) {
  return `//input[@id='${name}']`;
}
console.log(getXpath("js")); // //input[@id='js']
console.log(getXpath("enver's")); // //input[@id='enver's']
