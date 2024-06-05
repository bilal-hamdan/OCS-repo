//Question1
var x = parseFloat(window.prompt("enter number"));
if (x % 2 == 0) {
  window.alert("even");
} else {
  window.alert("odd");
}

//Question2
var age = window.prompt("enter age");
if (age < 18) {
  window.alert("not old enough");
}

//Question3
var temprature = window.prompt("enter temprature");
if (temprature < 20) {
  window.alert("weather is cold");
} else if (temprature >= 20 && temprature < 30) {
  window.alert("weather is warm");
} else {
  window.alert("weather is hot");
}

//Question4
var grade = window.prompt("enter grade");
if (grade >= 50) {
  window.alert("passed");
} else {
  window.alert("failed");
}

//Question5
var number1 = window.prompt("enter the first number to compare");
var number2 = window.prompt("enter the second number to compare");
if (number1 > number2) {
  window.alert("first number is greater");
} else if (number2 > number1) {
  window.alert("second number is greater");
} else {
  window.alert("both numbers equal");
}

// Question6+7
var pass = "bilal123";
var username = "bilal99";
var nameCheck = window.prompt("enter Username");
var passCheck = window.prompt("enter Password");
if (pass === passCheck && nameCheck === username) {
  window.alert("Login Sucsessfull");
} else {
  window.alert("Incorrect Username or password");
}
