// no method overloading in javascript
function print() {
  console.log("printing");
}
function print(name) {
  console.log("hi, " + name);
}

function print(name, age) {
  console.log("hi, " + name + ", you are " + age + " old");
}

print("emet", 30); // only last function will be called hi, emet, you are 30 old

// run test cases on remote machine
function displayBrowserInfo(browserName, browserVersion, browserExecution) {
  if (browserVersion === "string" && browserExecution === "boolean") {
    console.log(
      `Browser:${browserName},"version:"${browserVersion},"execution:"${browserExecution} `
    );
  }
}
