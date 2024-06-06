onload = login;

function login() {
  const users = [
    { username: "bilal", password: "bilal123" },
    { username: "baraa", password: "123456789" },
    { username: "basem", password: "abcd1234" },
  ];
  const name = window.prompt("Enter your username:");
  const password = window.prompt("Enter your password:");
  let res = "incorrect credentials";
  for (i in users) {
    if (users[i].password == password && users[i].username == name) {
      res = "login successful";
      break;
    }
  }
  document.getElementById("res").innerText = res;
  console.log(es);
  window.alert(res);
}
