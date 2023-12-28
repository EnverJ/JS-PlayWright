// Reverse a number
// 12345 -> 54321
// 123 -> 321

function reverseNumber(num) {
  // 1 - 1
  // 2 - 2
  // 0-9: same number
  if (num >= 0 && num <= 9) {
    return num;
  }

  let reverseNum = 0;
  while (num != 0) {
    reverseNum = reverseNum * 10 + (num % 10); // 0 * 10 +(1235%10)
    num = Math.floor(num / 10);
  }
  return reverseNum;
}

console.log(reverseNumber(100)); // 1
console.log(reverseNumber(1)); // 1

console.log(reverseNumber(99988877766555)); // 55566777888999
