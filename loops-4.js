console.log(1);

// print 1 to 10
// 1. for loop
for (let i = 1; i <= 10; i++) {
  console.log(i); // 1,2,3 ...10
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
