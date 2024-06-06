let balance;
let amount;
function withdrawal() {
  balance = window.prompt("enter your balace");
  amount = window.prompt("enter amount");
  if (amount <= balance && amount > 0) {
    balance -= amount;
    window.alert("your new balance is " + balance);
  } else {
    window.alert("error");
  }
}
withdrawal();
