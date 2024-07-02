const options = [
  { id: "option1", text: "JavaScript", votes: 0 },
  { id: "option2", text: "Python", votes: 0 },
  { id: "option3", text: "Java", votes: 0 },
  { id: "option4", text: "C++", votes: 0 },
];

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
  const checkedInput = document.querySelector('input[name="poll"]:checked');

  if (!checkedInput) {
    alert("Please select an option");
    return;
  }

  if (checkedInput) {
    inputId = checkedInput.id;
    let checkedInputObj = options.find((opt) => opt.id === inputId);
    if (checkedInputObj) {
      checkedInputObj.votes++;
      displayResult();
    }
  }
});

function displayResult() {
  const result = document.querySelector(".result");
  result.innerHTML = "";
  options.forEach((option) => {
    const percentage = ((option.votes / getTotalVotes()) * 100).toFixed(2) || 0;
    const progressBarWidth = percentage > 0 ? percentage + "%" : "0%";

    const optionResult = document.createElement("div");
    optionResult.classList.add("option-result");
    optionResult.innerHTML = `
     <div class="option-text">${option.text}</div>
        <div class="progress-bar">
        <div class="progress-bar-value" style="width:${progressBarWidth}"></div>
        </div>
        <span class="percentage">${percentage}%</span>
    `;
    result.appendChild(optionResult);
  });
}

function getTotalVotes() {
  return options.reduce((acc, option) => {
    return acc + option.votes;
  }, 0);
}
