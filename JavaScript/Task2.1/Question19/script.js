onload = calcCost;
function calcCost() {
  const singleRoomPrice = 300;
  const doubleRoomPrice = 500;
  const suitePrice = 1000;

  const roomType = prompt(
    "Enter the type of room (Single, Double, Suite):"
  ).toLowerCase();
  const numberOfNights = parseInt(prompt("Enter the number of nights:"));

  let res;

  if (roomType === "single") {
    res = singleRoomPrice * numberOfNights;
  } else if (roomType === "double") {
    res = doubleRoomPrice * numberOfNights;
  } else if (roomType === "suite") {
    res = suitePrice * numberOfNights;
  } else {
    alert("invalid input");
    return;
  }
  document.getElementById(
    "res"
  ).innerText = `Total cost for your booking: $${res}`;
  alert(`Total cost for your booking: $${res}`);
  console.log(`Total cost for your booking: $${res}`);
}
