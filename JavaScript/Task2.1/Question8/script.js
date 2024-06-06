onload = passCheck;
function passCheck() {
  var pass = prompt("inter password");
  var strength = 0;
  if (pass.length > 6) {
    strength++;
  }
  const hasNumber = /\d/.test(pass);
  if (hasNumber) {
    strength++;
  }
  const hasSC = /[^!@#$%^&*()_+\-={};':"|,.<>?*$]/.test(pass);
  if (hasSC) {
    strength++;
  }
  console.log(strength);
  switch (strength) {
    case 0:
      window.alert("weak password");
      break;
    case 1:
      window.alert("moderate password");
      break;
    case 2:
      window.alert("moderate password");
      break;
    case 3:
      window.alert("strong password");
      break;
    default:
      break;
  }
}
