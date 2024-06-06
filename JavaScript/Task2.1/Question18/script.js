onload = dayOfTheWeek;
function dayOfTheWeek() {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const userInput = parseInt(prompt("Enter a number from 1 to 7 :"));
  let res;

  if (userInput >= 1 && userInput <= 7) {
    res = daysOfWeek[userInput - 1];
  } else {
    res = "Invalid input";
  }
  document.getElementById(
    "res"
  ).innerText = `the corresponding day of the week is: ${res}`;
}
