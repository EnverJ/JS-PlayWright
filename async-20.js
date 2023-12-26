const fs = require("fs");

// task 1
fs.readFile("enver.txt", "utf-8", (error, data) => {
  console.log(data);
});

// task 2
console.log("By Enver");

// By Enver
// hi enver here. welcome to my channel. I am learning js
