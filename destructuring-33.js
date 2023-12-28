// array/object ---> variable
// array
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const numbers2 = [1, 2, 3, 4, 5];
const [a1, b1, c1, d1] = numbers2;
console.log(a1); // 1
console.log(b1); // 2
console.log(c1); // 3
console.log(d1); // 4

const lang = ["javascript", "GO", "PYTHON", "JAVA"];
const [p, q, ...testLang] = lang;
console.log(p); // javascript
console.log(q); // GO
console.log(testLang); // [ 'PYTHON', 'JAVA' ]

// Object:
const user = {
  firstName: "Tom",
  lastName: "Smith",
  age: 30,
};
// const { firstName, lastName, age } = user;
// console.log(firstName); // Tom
// console.log(lastName); // Smith
// console.log(age); // 30

const { firstName, lastName, age, city = "NY" } = user;
console.log(firstName); // Tom
console.log(lastName); // Smith
console.log(age); // 30
console.log(city); // NY

// function
// function printUserName(person) {
//   console.log(person.firstName + " " + person.lastName);
// }

// // without destructuring
// const person = {
//   firstName: "Adam",
//   lastName: "Smith",
// };
// printUserName(person); // Adam Smith

// with destructuring

function printUserName(firstName, lastName) {
  console.log(person.firstName + " " + person.lastName);
}
const person = {
  firstName: "John",
  lastName: "Green",
};
printUserName(person); // John Green
