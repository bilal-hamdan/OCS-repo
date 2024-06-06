onload = TicketPrice;
function TicketPrice() {
  let movieType = prompt("enter the movie type :").toLowerCase();
  let age = parseInt(prompt(" eneter your age:"));
  let cost;
  if (movieType == "3d") {
    if (age <= 12) {
      cost = "$10";
    } else {
      cost = "$50";
    }
  } else if (movieType == "regular") {
    if (age <= 12) {
      cost = "$5";
    } else {
      cost = "$25";
    }
  } else {
    cost = "invaild input";
  }
  document.getElementById("res").innerText = "Entry Fee" + cost;

  window.alert("Entry Fee" + cost);
}
