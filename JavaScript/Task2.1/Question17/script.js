onload = trafficLight;
function trafficLight() {
  const color = prompt(
    "Enter the current color of the traffic light"
  ).toLowerCase();
  let res;

  if (color == "red") {
    res = "stop";
  } else if (color == "yellow") {
    res = "slow down";
  } else if (color == "green") {
    res = "go";
  } else {
    res = "invalid color";
  }

  document.getElementById("res").innerText = res;
}
