// sync vs async behavior:
// sync  - code will be executed in a linear and sequential manner.

// l1-- done -- > fetch 100 user from the API/DB -- 20 secs
//l2-- -- display -- user profile -- 10 secs
//l3--
//l4--
//l5--
// end
// blocking behavior for the user

// console.log("start");
// for (let i = 0; i < 3000; i++) {
//   console.log(i); // how if 3 million records
// }
// console.log("end");

// Async:

// l1-- fetch user -- 100 users are coming from API/DB --> 20 secs
//l2-- display user profile -- 10 secs
//l3--  fetch the order info -- 5 secs
//l4--
//l5--
// end

console.log("start");
setTimeout(() => {
  console.log("time out is done");
}, 2000);
console.log("end");

// start
// end
// time out is done
