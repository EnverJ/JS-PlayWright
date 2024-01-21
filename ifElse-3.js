function checkAge(age) {
  if (age > 18) {
    console.log("you are not allowed to work here");
  } else {
    console.log("sorry, you cannot work here");
  }
}

checkAge(10);
checkAge(20);
checkAge(18);

//
function checkNumber(number) {
  if (number > 0) {
    console.log("Number is +be");
  } else if (number < 0) {
    console.log("Number is -ve");
  } else {
    console.log("Number is zero");
  }
}
checkNumber(10);
checkNumber(-9);
checkNumber(0);

// nested if-else
function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else {
    if (score >= 80) {
      grade = "B";
    } else {
      if (score >= 70) {
        grade = "C";
      } else {
        grade = "D";
      }
    }
  }
  console.log(grade);
}

checkGrade(90);
checkGrade(55);

// launch browser
let browser = "chrome";
if (browser == "chrome") {
  console.log("Launch chrome");
}
if (browser == "Edge") {
  console.log("Launch Edge");
}
if (browser == "safari") {
  console.log("Launch safari");
} else {
  console.log("Please enter the supported browser");
}
// Launch chrome
// Please enter the supported browser   but Why???

// fix, try if-else
let browser2 = "chrome";
if (browser2 == "chrome") {
  console.log("Launch chrome");
} else if (browser2 == "Edge") {
  console.log("Launch Edge");
} else if (browser2 == "safari") {
  console.log("Launch safari");
} else {
  console.log("Please enter the supported browser");
}
// Launch chrome  problem: checking each condition. unnecessary

// fix. switch case statement

let browser3 = "chrome";
switch (browser3) {
  case "chrome":
    console.log("Launch chrome");
    break;
  case "edge":
    console.log("Launch edge");
    break;
  case "safari":
    console.log("Launch safari");
    break;
  default:
    console.log("Wring browser");
    break;
}
// Launch chrome

// multi environment: dev, qa, stage, uat, prod
// multi users: admin, customer, seller ...
function setEnv(env) {
  switch (env) {
    case "QA":
      console.log("QA");
      break;
    case "DEV":
      console.log("DEV");
      break;
    case "Stage":
      console.log("Stage");
      break;
    case "Prod":
      console.log("Prod");
      break;
    default:
      console.log("Environment dose not match");
      break;
  }
}
setEnv("QA");

function setTVShow(name) {
  if (name == "GOAT") {
    console.log("winter is coming");
  } else if (name == "The Walking Dead") {
    console.log("GO to the terminal");
  } else if (name == "Peaky Blinder") {
    console.log("By the order of F**g peaky blinder");
  } else {
    console.log("not fun!!!");
  }
}
setTVShow("GOAT");

function checkCredit(score) {
  if (score >= 700) {
    if (score > 730) {
      console.log("5A stars client");
    } else {
      console.log("5B client");
    }
  } else if (score >= 600) {
    if (score > 650) {
      console.log("4A client");
    } else {
      console.log("4B client");
    }
  } else {
    console.log("Not qualified");
  }
}
checkCredit(703);
