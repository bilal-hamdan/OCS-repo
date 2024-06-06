window.onload = discount;

function discount() {
  let x = parseInt(prompt("Enter total amount of yor shopping cart :"));
  let res;
  if (x >= 300) {
    x = x - x / 3;
    res = "final amount after discount = " + x;
  } else if (x >= 200) {
    x = x - x / 5;
    res = "final amount after discount = " + x;
  } else if (x >= 100) {
    x = x - x / 10;
    res = "final amount after discount = " + x;
  }
  document.getElementById("discount").innerText = res;
  console.log(res);
  window.alert(res);
}
