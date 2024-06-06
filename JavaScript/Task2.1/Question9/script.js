function opiration() {
  let no1 = parseFloat(document.forms["myForm"]["number1"].value);
  let no2 = parseFloat(document.forms["myForm"]["number2"].value);
  let op = document.forms["myForm"]["opiration"].value;
  //  PART1
  if (op == "+") {
    result = no1 + no2;
  } else if (op == "-") {
    var result = no1 - no2;
  } else if (op == "*") {
    var result = no1 * no2;
  } else if (no2 == 0) {
    result = "can't devide by zero";
  } else {
    var result = no1 / no2;
  }
  console.log(result);

  var x = document.getElementById("ecuation");
  x.innerHTML =
    "<h3>your ecuation is: </h3>" + no1 + " " + op + " " + no2 + " = " + result;
}
