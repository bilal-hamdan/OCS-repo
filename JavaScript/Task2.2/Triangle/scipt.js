function angleCheck() {
  let sum = 0;
  for (let index = 1; index <= 3; index++) {
    let angle = parseFloat(window.prompt(`Enter Angle ${index}`));
    if (angle <= 0 || angle >= 180) {
      alert("wrong input");
      break;
    }
    sum += angle;
  }
  if (sum == 180) {
    document.getElementById("res").innerText = "Valid Triangle";
  } else {
    document.getElementById("res").innerText = "The triangle is not valid.";
  }
}
onload = angleCheck;
