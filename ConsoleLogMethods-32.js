console.log("hello js"); // hello js

console.error("array error"); // array error
console.warn("some warning"); // some warning
console.info("this is js"); //this is js

const user = {
  name: "john",
  age: 30,
  city: "NY",
  country: "US",
};

console.log(user); // { name: 'john', age: 30, city: 'NY', country: 'US' }

// table format
console.table(user);

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │  name   │ 'john' │
// │   age   │   30   │
// │  city   │  'NY'  │
// │ country │  'US'  │
// └─────────┴────────┘

const user2 = {
  name: "john",
  age: 30,
  city: "NY",
  country: "US",
};
console.table({ user, user2 });

// ┌─────────┬────────┬─────┬──────┬─────────┐
// │ (index) │  name  │ age │ city │ country │
// ├─────────┼────────┼─────┼──────┼─────────┤
// │  user   │ 'john' │ 30  │ 'NY' │  'US'   │
// │  user2  │ 'john' │ 30  │ 'NY' │  'US'   │
// └─────────┴────────┴─────┴──────┴─────────┘

// grouping

console.group("login feature");
console.log("reset pwd");
console.log("error log in message"), console.log("enter username/password");
console.groupEnd();
/**
 *login feature
  reset pwd
  error log in message
  enter username/password
 */

// timer
// console.time("print 1 to N values");
// for (let i = 1; i < 10000; i++) {
//   console.log(i);
// }
// console.timeEnd("print 1 to N values"); // print 1 to N values: 40.231ms

// clear()
// console.log("reset pwd");
// console.log("reset pwd");
// console.log("reset pwd");
// console.log("reset pwd");
// console.log("reset pwd");
// console.log("reset pwd");
// console.clear();

// count()
console.count("password");
console.count("password");
console.count("password");

// password: 1
// password: 2
// password: 3

// console.assert()
console.assert(10 === 10, "this is FAILED"); // NO MESSAGE PRINTED
console.assert(10 === 30, "this is failed"); // Assertion failed: this is failed
let flag = false;
console.assert(flag, "this is failed"); // Assertion failed: this is failed

// function testMyJob() {
//   console.trace();
// }
// testMyJob();

// Trace
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49

console.log(
  "%c I love js coding",
  "color:red;background-color:green;border:solid"
); // c is saying the this is css selector
//  I love js coding
