//1. function declaration

function add(a, b) {
  return a + b;
}
const sum = add(2, 9);
console.log(sum); // 11

function print() {
  console.log('no parameters"');
}

print(); // no parameters"

// 2. function expression: Anonymous
const multiply = function (x, y) {
  return x * y;
};
const mul = multiply(3, 7);
console.log(mul); // 21

// 3. Arrow function
const divide = (t1, t2) => t1 / t2;
const dev = divide(8, 2);
console.log(dev); // 4

// 4. Function Constructor
const subtract = new Function("a", "b", "return a - b"); // 3ed parameter behave like a function body
const subs = subtract(90, 4);
console.log(subs); // 86

// 5. IIFE(immediately Invoked Function Expression)
(function () {
  console.log("the server is up and running");
})(); // the server is up and running
