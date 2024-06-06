window.onload = grading;
function grading() {
  let num1 = parseFloat(window.prompt("Enter a number:"));
  let num2 = parseFloat(window.prompt("Enter a number:"));
  let num3 = parseFloat(window.prompt("Enter a number:"));
  let res;
  if (num1 >= num2 && num1 >= num3) {
    if (num1 > 0) {
      res = num1 + " positive";
    } else if (num1 < 0) {
      res = num1 + " negative";
    } else {
      res = num1 + " zero";
    }
  } else if (num2 >= num1 && num2 >= num3) {
    if (num2 > 0) {
      res = num2 + " positive";
    } else if (num2 < 0) {
      res = num2 + " negative";
    } else {
      res = num2 + " zero";
    }
  } else if (num3 >= num1 && num3 >= num2) {
    if (num3 > 0) {
      res = num3 + " positive";
    } else if (num3 < 0) {
      res = num3 + " negative";
    } else {
      res = num3 + " zero";
    }
  }
  var x = document.getElementById("res");

  x.innerText = `largest number is : ${res}`;
  console.log(x);
  console.log(`largest number is : ${res}`);
  window.alert(`largest number is : ${res}`);
}
