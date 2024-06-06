function weather() {
  const x = parseInt(window.prompt("Enter the temp:"));
  let res;
  const fahrenheit = (x * 9) / 5 + 32;
  if (x >= 100) {
    res = "above boiling";
  } else if (x > 0 && x < 100) {
    res = "normal temperatur";
  } else if (x < 0) {
    res = "freazing temperatur";
  }
  document.getElementById("res").innerText =
    "temperatur in fahrenheit = " + fahrenheit;
  console.log(res);
  window.alert(res);
}
weather();
