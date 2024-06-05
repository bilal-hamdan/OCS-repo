function opiration() {
  let no1 = parseFloat(document.forms["myForm"]["number1"].value);
  let no2 = parseFloat(document.forms["myForm"]["number2"].value);
  let op = document.forms["myForm"]["opiration"].value;
  let mark = parseFloat(document.forms["myForm"]["mark"].value);
  //  PART1
  if (op == "+") {
    result = no1 + no2;
  } else if (op == "-") {
    var result = no1 - no2;
  } else if (op == "*") {
    var result = no1 * no2;
  } else {
    var result = no1 / no2;
  }
  console.log(result);

  var x = document.getElementById("ecuation");
  var y = document.getElementById("mark");
  x.innerHTML =
    "<h3>your ecuation is: </h3>" + no1 + " " + op + " " + no2 + " = ";

  //    PART2
  if (mark < 50) {
    y.innerHTML = "<br/>" + "<h3>Failed</h3>";
  } else if (mark >= 50 && mark < 60) {
    y.innerHTML = "<br/>" + "<h3>D</h3>";
  } else if (mark >= 50 && mark < 70) {
    y.innerHTML = "<br/>" + "<h3>C</h3>";
  } else if (mark >= 70 && mark < 80) {
    y.innerHTML = "<br/>" + "<h3>B</h3>";
  } else if (mark >= 80 && mark < 90) {
    y.innerHTML = "<br/>" + "<h3>A</h3>";
  } else if (mark >= 90 && mark < 100) {
    y.innerHTML = "<br/>" + "<h3>A+</h3>";
  } else {
    y.innerHTML = "<br/>" + "<h3>WRONG MARK</h3>";
  }
}
let x = prompt("Enter the value for x:");
let y = prompt("Enter the value for y:");

x = Number(x);
y = Number(y);

let message;

if (x > y) {
  message = "Hello World";
} else {
  message = "Goodbye";
}

alert(message);

console.log(message);

document.getElementById("result").textContent = message;
