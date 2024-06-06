var year = Number(window.prompt("enter a year"));

if ((year % 4 == 0 && year & (100 != 0)) || year % 400 == 0) {
  window.alert("Leap Year");
} else {
  window.alert("Not Leap Year");
}
