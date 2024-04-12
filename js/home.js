window.onload = function () {
  let savedVote = localStorage.getItem("savedVote");

  if (savedVote) {
    let vote = JSON.parse(savedVote);

    addRowToResults(vote);
  }
};

function saveVote() {
  let userNameInput = document.getElementById("name");
  let textDecoration = document.getElementById("description");
  let selectedCandidateInput = document.getElementById("candidates");
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  let userName = userNameInput.value;
  let selectedCandidate = selectedCandidateInput.value;
  let description = textDecoration.value;

  let properties = [];
  checkboxes.forEach(function (checkbox) {
    properties.push(checkbox.id);
  });

  let vote = {
    name: userName,
    candidate: selectedCandidate,
    properties: properties,
    description: description,
  };

  addRowToResults(vote);

  userNameInput.value = "";
  textDecoration.value = "";
  selectedCandidateInput.value = "choose";
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  localStorage.setItem("savedVote", JSON.stringify(vote));
}

function addRowToResults(vote) {
  let tableBody = document.querySelector("#voteResults tbody");

  let newRow = tableBody.insertRow(tableBody.rows.length);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);

  cell1.textContent = tableBody.rows.length;
  cell2.textContent = vote.name;
  cell3.textContent = vote.candidate;
  cell4.textContent = vote.properties.join(", ");
  cell5.textContent = vote.description;
}

// Add to table two columns , surname and age of candidates , for surname need to use input , for age select
