function bmi() {
  const bmiForm = document.getElementById("bmi");
  const weight = parseFloat(bmiForm.elements["weight"].value);
  const height = parseFloat(bmiForm.elements["height"].value);
  let calc = weight / (height * height);
  var result = document.createElement("h4");
  result.innerText = "hello";
  console.log(result);
  var bmi = document.getElementsByClassName("bmi");
  var result = document.createElement("h4");
  result.style.textAlign = "center";
  if (calc < 18.5) {
    result.innerText = "Under Weight";
    bmi[0].appendChild(result);
  } else if (calc >= 18.5 && calc < 25) {
    result.innerText = "Normal Weight";
    bmi[0].appendChild(result);
  } else if (calc >= 25 && calc < 30) {
    result.innerText = "Over Weight";
    bmi[0].appendChild(result);
  } else if (calc > 30) {
    result.innerText = "Obesity";
    bmi[0].appendChild(result);
  } else {
    result.innerText = "wrong inputs";
    bmi[0].appendChild(result);
    result.style.alignSelf = "center";
  }

  console.log("weight: " + weight, "\n" + "height: " + height, "\n" + calc);
}
