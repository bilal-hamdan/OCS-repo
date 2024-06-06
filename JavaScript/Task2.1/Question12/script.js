onload = weather;

function weather() {
  const x = parseInt(window.prompt("Enter the temp:"));
  let temp;
  if (x > 25) {
    temp = "hot";
  } else if (x >= 16 && x <= 25) {
    temp = "warm";
  } else if (x >= 0 && x <= 15) {
    temp = "cold";
  } else if (x < 0) {
    temp = "very cold";
  }
  document.getElementById("res").innerText = "weather is: " + temp;
  console.log("weather is: " + temp);
  window.alert(temp);
}
