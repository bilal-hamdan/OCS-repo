window.onload = mark;
function mark() {
  var score = Number(window.prompt("enter score"));

  if (score >= 50) {
    var bonus = window.confirm("did you complete bonus assignments");
    if (bonus === true) {
      score += 5;
    }
  }

  if (score < 50) {
    window.alert("F");
  } else if (score >= 50 && score < 60) {
    window.alert("D");
  } else if (score >= 60 && score < 70) {
    window.alert("C");
  } else if (score >= 70 && score < 80) {
    window.alert("B");
  } else if (score >= 80 && score < 90) {
    window.alert("A");
  } else if (score > 90) {
    window.alert("A+");
  }
}
