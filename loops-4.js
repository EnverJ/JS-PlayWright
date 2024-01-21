console.log(1);

// print 1 to 10
// 1. for loop
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1,2,3 ...10
}
console.log("----------------");
for (let x = 10; x <= 100; x += 5) {
  console.log(x);
}

console.log("---------");
// 2. for ... of loop:
const array = [1, 2, 3, 4, 5];
for (const e of array) {
  console.log(e); // 1,2,3,4,5
}
console.log("---------");
// index base
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]); // 1,2,3,4,5
}
console.log("xxxxxxxxxxxxxxxx");
const names = ["Java", "Python", "Ruby", "C++"];
for (const a of names) {
  console.log("Languages " + a);
}
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("---while loop---");
// while loop: 1 to 10
let p = 1;
while (p <= 10) {
  console.log(p++); // 1,2,3 ....10
}

console.log("---while loop---");
let a = 2;
while (a <= 10) {
  console.log(a);
  a = a + 2; // 2,4,6,8,10
}

// do while
// will be executed at least once
console.log("---do while loop---");
let v = 1;
do {
  console.log(v);
  v++;
} while (v <= 10); // 1,2,3 ...10

let v1 = 100;
do {
  console.log(v1);
  v1++;
} while (v <= 10); // 100

// break
// 1 to 100; print hi when you see the multiplication of 5:
console.log("-----hi----");
let num = 5;
while (num <= 100) {
  console.log(num);
  if (num % 5 == 0) {
    console.log("hi--by");
    break;
  }
  num++;
}

// continue
const browser4 = ["chrome", "firefox", "edge"];
for (a of browser4) {
  console.log(a);
  if (a == "firefox") {
    console.log("launch firefox");
    break;
  }
}

console.log("----for ...in-----");
// for ... in loop
const user = {
  name: "john",
  age: 30,
  city: "NYC",
};
for (const key in user) {
  console.log(key + " : " + user[key]);
}

// name : john
// age : 30
// city : NYC
console.log(" one more...");
let book = {
  author: "Jan",
  title: "js-js-js",
  page: 200,
  forSale: true,
  price: 24,
};
for (const a in book) {
  if (book[a] === true) {
    console.log(a + ":" + book[a]);
    console.log("book is for sale");
    break;
  }
}

console.log("for in vs for of");
const br = ["chrome", "firefox", "edge"];
for (const ele in br) {
  console.log(ele);
  console.log(ele + " : " + br[ele]);
}
// 0
// 0 : chrome
// 1
// 1 : firefox
// 2
// 2 : edge

console.log("for in vs for of");
const brOf = ["chrome", "firefox", "edge"];
for (const ele of brOf) {
  console.log(ele);
}

// chrome
// firefox
// edge
