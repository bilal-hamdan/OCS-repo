onload = multipTable;
function multipTable() {
  const num = parseInt(prompt("enter an number between 1 and 10"));
  const table = document.getElementById("mt");
  let res;
  for (let i = 0; i <= 10; i++) {
    res = num * i;

    table.innerText += `${num}* ${i}= ${res}\n`;
  }
}
