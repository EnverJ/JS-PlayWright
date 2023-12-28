const numbers = [1, 2, 3, 45, 5, 6, 6, 7, 7, 7, 78, 8, 8, 8, 0, 8];
const names = ["john", "john", "tom", "tom", "Josh"];

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
// [1, 2, 3, 45, 5, 6, 7, 78, 8, 0];

const uniqueNames = [...new Set(names)];
console.log(uniqueNames); // [ 'john', 'tom', 'Josh' ]
