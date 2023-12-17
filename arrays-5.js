// declaration of an array
let myArray = []; // empty array

let languages = ["python", "java", "c#"];
// 1. push  add to the end of the array
languages.push("ruby", "javascript");
console.log(languages); //[ 'python', 'java', 'c#', 'ruby', 'javascript' ]

// 2. pop remove that last element form the array
let numbers = [1, 2, 3, 4, 5, 6]; // numbers
numbers.pop();
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// 3. shift remove the first element from the array
let fruits = ["apple", "banana", "mango", "grapes"];
let first_Fruit = fruits.shift();
console.log(first_Fruit); //apple
console.log(fruits); // [ 'banana', 'mango', 'grapes' ]

// 4. unshift  opposite of shit. add one or more elements to the beginning of the array
let color = ["black", "white", "red"];
color.unshift("blue");
console.log(color); // [ 'blue', 'black', 'white', 'red' ]

// 5. splice allow you add or remove specif element from the array
let animals = ["donkey", "monkey", "lion"];
animals.splice(1, 1, "tiger");
console.log(animals); // [ 'donkey', 'tiger', 'lion' ]
animals.splice(1, 2, "fish");
console.log(animals); // [ 'donkey', 'fish' ]
animals.splice(1, 2, "shark", "dog");
console.log(animals); // [ 'donkey', 'shark', 'dog' ]

// 6. slice:
let pop = [1, 2, 3, 4, 5];
let newPop = pop.slice(1, 4);
console.log(newPop); // [ 2, 3, 4 ]

// 7. concat combine two or more array and create a new array
let fr = ["grapes", "banana", "apple"];
let num = [1, 2, 3, 4];
let mixArray = fr.concat(num);
console.log(mixArray); // [ 'grapes', 'banana', 'apple', 1, 2, 3, 4 ]

// 8. indexOf: return the first element
let myColor = ["red", "blue", "purple", "red", "red"];
console.log(myColor.indexOf("red")); // 0
console.log(myColor.indexOf("purple")); // 2
console.log(myColor.indexOf("black")); // -1
// index of 2nd red
console.log(myColor.indexOf("red", 2)); // 3
console.log(myColor.indexOf("red", myColor.indexOf("red") + 1)); // 3

// 9. includes
let tests = ["admin", "customer", "vendor", "seller"];
let flag = tests.includes("customer");
console.log(flag); // true
let flag2 = tests.includes("customer", "vendor");
console.log(flag2); // true
let flag3 = tests.includes("customer", "security", "vendor");
console.log(flag3); // true    either

// 10. forEach:
let n = [1, 2, 3, 4, 5, 6, 7];
n.forEach((e) => {
  console.log(e); // 1 2 3 4 5 6 7
});
