function checkDays(dayNumber) {
  let day;
  switch (dayNumber) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      day = "Saturday";
      break;
    default:
      console.log("Invalid day");
      break;
  }
  return day;
}
console.log(checkDays(2)); // Monday. entire switch case will be braked if the condition satisfied.
console.log(checkDays(7)); // Saturday
console.log(checkDays(70)); // Invalid day  undefined
