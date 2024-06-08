const months = [
  { month: "January", days: 31 },
  { month: "February", days: 28 },
  { month: "March", days: 31 },
  { month: "April", days: 30 },
  { month: "May", days: 31 },
  { month: "June", days: 30 },
  { month: "July", days: 31 },
  { month: "August", days: 31 },
  { month: "September", days: 30 },
  { month: "October", days: 31 },
  { month: "November", days: 30 },
  { month: "December", days: 31 },
];
let month = parseInt(window.prompt("Enter the Months"));
function calcM(m) {
  if (m > 0 && m <= 12) {
    let MonthAndDays = months[m - 1];
    document.getElementById(
      "res"
    ).innerText = `There are ${MonthAndDays.days} in The Month of ${MonthAndDays.month} `;
  } else {
    window.alert("wrong inputs");
  }
}

window.onload = calcM(month);
