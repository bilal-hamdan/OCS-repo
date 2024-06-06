onload = checkNatonality;

function checkNatonality() {
  let nationality = prompt("enter your Nationality :").toLowerCase();
  let age = parseInt(prompt(" eneter your age:"));
  let res;
  if (nationality == "american") {
    if (age >= 18) {
      res = "you can vote";
    } else {
      res = "you cant vote";
    }
  } else {
    res = "you cant vote";
  }
  document.getElementById("res").innerText = res;
  console.log(es);
  window.alert(res);
}
