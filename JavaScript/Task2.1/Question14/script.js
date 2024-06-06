onload = order;

function order() {
  let order = prompt("enter your order (Pizza, Pasta,Salad) :").toLowerCase();
  let numOfItems = parseInt(prompt(" eneter the number of items:"));

  let cost;
  let discount;
  if (numOfItems > 1) {
    discount = 0.15;
  } else {
    discount = 0;
  }
  if (order == "pizza") {
    cost = 10 * numOfItems;
  } else if (order == "pasta") {
    cost = 5 * numOfItems;
  } else if (order == "salad") {
    cost = 3 * numOfItems;
  } else {
    cost = "invaild input";
  }
  let finalPrice = cost - cost * discount;
  document.getElementById("res").innerText = "Order Price = " + finalPrice;
  console.log("Final Price : " + finalPrice);
  window.alert(finalPrice);
}
