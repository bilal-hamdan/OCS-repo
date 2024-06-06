onload = marksAvg;

function marksAvg() {
  let totalMarks = 0;
  for (let i = 1; i <= 3; i++) {
    const mark = parseInt(window.prompt(`Enter your grade for subject ${i}:`));
    totalMarks += mark;
  }
  const avg = totalMarks / 3;
  let res;
  if (avg > 60) {
    res = "pass";
  } else {
    res = "fail";
  }
  document.getElementById("res").innerText =
    "your result is: " + res + "\n and your avarage is: " + avg;
  console.log(res);
  window.alert(res);
}
