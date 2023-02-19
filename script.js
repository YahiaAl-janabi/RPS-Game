const decisions = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

const aiMakesChoice = () => {
  let decisionCalculation = Math.floor(Math.random() * decisions.length);
  let computerDecision = decisions[decisionCalculation];
  return computerDecision;
};

const optionBtns = document.querySelectorAll(".option-btn");
optionBtns.forEach((option) => {
  option.addEventListener("click", () => {
    let computersDecision = aiMakesChoice();
    let humanDecision = option.innerHTML;
    const humanScoreContainer = document.getElementById("you");
    const computerScoreContainer = document.getElementById("computer");
    const humanAnswerContainer = document.getElementById("my-answer");
    const computerAnswerContainer = document.getElementById("computer-answer");

    switch (humanDecision) {
      case "Rock":
        if (computersDecision == "Paper") {
          ++computerScore;
        } else if (computersDecision == "Scissors") {
          ++humanScore;
        }
        break;
      case "Paper":
        if (computersDecision == "Rock") {
          ++humanScore;
        } else if (computersDecision == "Scissors") {
          ++computerScore;
        }
        break;
      case "Scissors":
        if (computersDecision == "Rock") {
          ++computerScore;
        } else if (computersDecision == "Paper") {
          ++humanScore;
        }
        break;
    }
    humanScoreContainer.innerHTML = humanScore;
    computerScoreContainer.innerHTML = computerScore;
    humanAnswerContainer.innerHTML = humanDecision;
    computerAnswerContainer.innerHTML = computersDecision;
  });
});
