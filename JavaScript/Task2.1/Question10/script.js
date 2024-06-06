onload = borrow;
function borrow() {
  let user = window.prompt("type of user(student, teacher):");
  let numOfBooks = parseInt(prompt(" the number of books you want to borrow:"));
  let res;
  if (user == "student" && numOfBooks <= 3) {
    res = "approved";
  } else if (user == "teacher" && numOfBooks <= 5) {
    res = "approved";
  } else {
    res = "Denied";
  }
  document.getElementById("res").innerText = "Result: " + res;
  console.log(`Result: ${res}`);
  window.alert(res);
}
