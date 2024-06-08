let num = parseFloat(prompt("enter a number"));
function f(n) {
  if (n > 0) {
    document.getElementById("res").innerText = "The number is positive";
  } else if (n < 0) {
    document.getElementById("res").innerText = "The number is negative";
  } else if (n == 0) {
    document.getElementById("res").innerText =
      "The number is niether positive nor negative";
  } else {
    document.getElementById("res").innerText = "Invalid Input";
  }
}
onload = f(num);
