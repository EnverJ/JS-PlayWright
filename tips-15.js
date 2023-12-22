// 1. find unique value form an array
const array = [1, 2, 3, 4, 2, 3, 2, 6, 8, 8, 8, 8, 8, 8, 8];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [ 1, 2, 3, 4, 6, 8 ]

// 2. convert integer to string
const num = 32;
const numStr = num + "";
console.log(numStr + ". type is: " + typeof numStr); // 32. type is: string

// or
console.log(String(num) + " 10"); //32 10

// 3. convert a floating value to integer
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum); //3

// 4. check if variable is a number
const value = "45";
if (typeof value === "number" && !isNaN(value)) {
  console.log(value + "is a number"); // 45is a number
} else {
  console.log(value + " is not a number");
}

// 5. swap two numbers
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// 6. check if an object has property;
const person = {
  name: "John",
  age: 34,
};
if (person.hasOwnProperty("name")) {
  console.log("person has name property"); // person have name property
}

// 7. remove false values from the array: (false, 0,"", null, undefined. Nan)
const values = [0, 1, , false, NaN, "", undefined, 4];
const newVal = values.filter(Boolean);
console.log(newVal); // [ 1, 4 ]

// 8. sTRING --> UpperCase, lower Case
const str = "Enver's Code";
const u1 = str.toUpperCase();
const u2 = str.toLocaleLowerCase();
console.log(u1); // ENVER'S CODE
console.log(u2); // enver's code

// 9. check ig Array contains a value
const lang = ["java", "python", "R", "GO", "JavaScript"];
if (lang.includes("java")) {
  console.log("found"); // found
}

// 10. check if an Array is empty
const empty = [];
if (empty.length === 0) {
  console.log(empty + "is empty"); // is empty
}

// 11. generate a random number
const min = 10;
const max = 30;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber); // random numbers between min and max, like 12, 13 ...

// 12. String to number
const strNum = "32.01";
const x1 = parseFloat(strNum);
console.log(x1); // 32.01

// 13. Join Array elements into a String value
const words = ["Hello", "Enver", "!!!"];
const sentence = words.join(" ");
console.log(sentence); // Hello Enver !!!

// 14. get object property;
const user = {
  name: "tom",
  age: 23,
  dob: "01/01/2000",
};
console.log(user["name"]); // tom
console.log(user.dob); // 01/01/2000
console.log(user["dob"]); // 01/01/2000
console.log(user["age"]); // 23

// 15 .clone and array or object
const marks = [10, 20, 30, 40, 50];
const marksDuplicate = [...marks]; // spread operator
console.log(marksDuplicate); // [ 10, 20, 30, 40, 50 ]
// if object
console.log({ ...user }); // { name: 'tom', age: 23, dob: '01/01/2000' }

// 16. convert an object to an Array

const employee = {
  name: "Tom",
  age: 23,
  dob: "01/01/2000",
};
// a. keys array:
const keyArray = Object.keys(employee);
console.log(keyArray); // [ 'name', 'age', 'dob' ]

// b. values of array
const valueArray = Object.values(employee);
console.log(valueArray); // [ 'Tom', 23, '01/01/2000' ]

// c. key ad value
const keyValue = Object.entries(employee);
console.log(keyValue); // [ [ 'name', 'Tom' ], [ 'age', 23 ], [ 'dob', '01/01/2000' ] ]

// 17. get current date and time
const currentDate = new Date();
console.log(currentDate.toLocaleString()); // 12/21/2023, 9:11:24 PM

// 18. check variable is defined
let i;
if (typeof i === "undefined") {
  //console.log(i); // undefined
  console.log("variable is undefined"); // variable is undefined
}

// 20. truncate an Array
const testing = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
testing.length = 3;
console.log(testing); // [ 0, 1, 2 ]

// 21. last item in an Array
const pop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const n1 = pop.slice(-1);
console.log(n1); // [ 9 ]
