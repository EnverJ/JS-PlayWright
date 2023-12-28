console.log("JavaScript".length); // 10

console.log("JavaScript testing".length); // 18

let str = "Javascript";
console.log(str.length); // 10

console.log("Javascript"[2]); // v

console.log("Javascript".charAt(2)); //v

console.log("Javascript".charCodeAt(2)); // 118
console.log("JAVASCRIPT".toLocaleLowerCase()); // javascript

console.log("JavaScript".slice(2, -5)); // t position is -1. c=-5  output: // vaS
console.log("JavaScript".substring(2, 6)); // vaSc
console.log("JavaScript".substring(-2, 2)); // notes, -2 will be converted to 0. same as (0,2)   output: Ja

console.log("Mountain".concat(" Ever")); // Mountain Ever

console.log("Java_JavaScript_Python".split("_")); // [ 'Java', 'JavaScript', 'Python' ]

console.log("JavaScript".includes("Java")); // true
console.log("JavaScript".includes("JAVA")); // false

console.log("Dev test Framework".replace("Dev", "JS")); // JS test Framework
console.log("Dev test Framework Dev".replaceAll("Dev", "JS")); // JS test Framework JS
console.log("09-10-2023".replaceAll("-", "/")); // 09/10/2023
console.log("        Hello js         ".trim()); // Hello js
console.log("        Hello js         ".trimStart()); // Hello js
console.log("        Hello js         ".trimEnd()); //         Hello js

console.log("Automation".padEnd(15, "*")); // Automation***** total length is 15
console.log("Dev".padStart(10, "^")); // ^^^^^^^Dev
console.log("JavaScript".startsWith("J")); // true
console.log("JavaScript".endsWith("y")); // false

console.log("Dev".repeat(3)); // DevDevDev
console.log("WeekAutomationLab".indexOf("Automation")); // 4
console.log("WeekAutomationLab".indexOf("N")); // -1
console.log("Weekly Automation lab lab".lastIndexOf("lab")); // 22

console.log("Weekly Automation lab lab".search("Automation")); // 7
