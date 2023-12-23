// callback is a function that is passed as an argument to another function
// async call / task -- once this task is completed -- then only the callback function will be called

function greet(name, callback) {
  console.log("hello " + name); // normal/sync step/task, could be async call/api
  callback();
}

// callback function
function welcome() {
  console.log("welcome");
}

greet("Enver", welcome);
// hello Enver
// welcome

// callback with async function:
function printInfo(name, callback) {
  // async function/task/step
  setTimeout(function () {
    console.log("printing info for " + name);
    callback("call me back...");
  }, 5000); // delay of 1000ms/1 sec
}
function displayMessage(msg) {
  console.log(msg);
}

printInfo("Josh", displayMessage);

// printing info for Josh
// call me back...

//
function fetchUserDate(userId, callback) {
  setTimeout(function () {
    const users = {
      1: { id: 1, name: "enver" },
      2: { id: 2, name: "ezmet" },
    };
    const user = users[userId];
    if (user) {
      callback(null, user);
    } else {
      callback("user not found...", null);
    }
  }, 2000);
}

// callback
function handleUserData(error, user) {
  if (error) {
    console.error("Error", error);
  } else {
    console.log("User: ", user);
  }
}

fetchUserDate(1, handleUserData); // User:  { id: 1, name: 'enver' }
