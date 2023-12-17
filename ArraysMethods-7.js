// 1. every()
let num = [1, 2, 4, 5, 6, 7];
let flag = num.every((e) => e < 5);
console.log(flag); // false

// 2. some  opposite of every(0)
let number = [1, 2, 3, 4, 5];
let fg = number.some((e) => e % 2 === 0);
console.log(fg); // true  at least one element available

// if any of them greater than 20

let sg = number.some((e) => e > 20);
console.log(sg); // false

// 3. find()

let total = [1, 2, 3, 5, 6];
let sat = total.find((e) => e % 2 === 0);
console.log(sat); // 2

// 4. indexOf()
let fruits = ["apple", "banana", "mango"];
let ind = fruits.indexOf("banana");
console.log(ind); // 1

// 5. lasIndexOf
let letter = [1, 2, 3, 4, 5, 3];
console.log(letter.lastIndexOf(3)); // 5

// 6. reverse()
let fruits2 = ["apple", "banana", "mango"];
let revF = fruits2.reverse();
console.log(revF); // [ 'mango', 'banana', 'apple' ]

// 7. sort() alphabetical
let product = ["macbook", "imac", "samsung", "canon"];
let proSort = product.sort();
console.log(proSort); // [ 'canon', 'imac', 'macbook', 'samsung' ]
