// 1. map -- always return another array
let number = [1, 2, 3];
let doubleNum = number.map((e) => e * 2);
console.log(doubleNum); // [ 2, 4, 6 ]

// F -> C
// (F-32)*(5/9)
let fahTemp = [32, 68, 104, 200];
console.log(fahTemp.map((e) => (e - 32) * (5 / 9))); // [ 0, 20, 40, 93.33333333333334 ]

//
function fahToCel(fah) {
  return (fah - 32) * (5 / 9);
}
let celTem = fahTemp.map(fahToCel);
console.log(celTem); // [ 0, 20, 40, 93.33333333333334 ]

// 2. filter filter data from the array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum); // [ 2, 4, 6, 8, 8, 10 ]

let employee = [
  { name: "john", age: 30, gender: "male" },
  { name: "josh", age: 40, gender: "male" },
  { name: "piri", age: 46, gender: "female" },
  { name: "nisa", age: 46, gender: "female" },
  { name: "sani", age: 26, gender: "female" },
];

// female employee age over 30
let femaleEmp = employee.filter((emp) => {
  return emp.gender == "female" && emp.age > 30;
});
console.log(femaleEmp);
// [
//     { name: 'piri', age: 46, gender: 'female' },
//     { name: 'nisa', age: 46, gender: 'female' }
//   ]

// 3. reduce
let numb = [1, 2, 3, 4, 5]; // 15
let sum = numb.reduce((acc, num) => acc + num, 0); // first acc is 0
console.log(sum); // 15

// max num
let top = [12, 3, 4, 45, 90, 110];
let maxNum = top.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
}, top[0]);
console.log(maxNum); // 110

let products = [
  { name: "hat", price: 100, count: 3 },
  { name: "shoes", price: 200, count: 2 },
  { name: "belt", price: 150, count: 5 },
  { name: "coat", price: 300, count: 1 },
  { name: "pant", price: 180, count: 4 },
];
let totalPrice = products.reduce((total, item) => {
  return total + item.price * item.count;
}, 0);
console.log(totalPrice); // 2470

// total for each items
let products2 = [
  { name: "hat", price: 100, count: 3 },
  { name: "shoes", price: 200, count: 2 },
  { name: "belt", price: 150, count: 5 },
  { name: "coat", price: 300, count: 1 },
  { name: "pant", price: 180, count: 4 },
];

let totalForEachItem = products.map((item) => {
  return {
    name: item.name,
    total: item.price * item.count,
  };
});

console.log(totalForEachItem);

// [
//     { name: 'hat', total: 300 },
//     { name: 'shoes', total: 400 },
//     { name: 'belt', total: 750 },
//     { name: 'coat', total: 300 },
//     { name: 'pant', total: 720 }
//   ]
