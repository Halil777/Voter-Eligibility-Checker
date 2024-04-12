function checkEligibility() {
  let age = document.getElementById("age").value;

  if (age >= 18) {
    displayResult("You are eligible to vote!");
    window.location.href = "../pages/home.html";
  } else if (age >= 16) {
    displayResult("You are eligible to vote with parental consent.");
  } else {
    displayResult("You are not eligible to vote yet.");
  }
}

function displayResult(message) {
  document.getElementById("eligibilityResult").innerText = message;
}
