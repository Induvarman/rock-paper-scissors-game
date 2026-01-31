function getComputerChoice() {
  let randomNumber = Math.random();
  let computerResult = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3)
    computerResult = "rock";
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
    computerResult = "paper";
  else if (randomNumber >= 2 / 3 && randomNumber < 1)
    computerResult = "scissor";

  return computerResult;
}

function getHumanChoice() {
  let humanResult = prompt("Enter Your Choice (rock, paper, scissor): ").toLowerCase();
  return humanResult;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissor") {
    console.log("You Win! Rock beats Scissor.");
    humanScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose! Paper beats Scissor.");
    computerScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock.");
    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "scissor") {
    console.log("You Lose! Scissor beats paper.");
    computerScore++;
  }
  else if (humanChoice === "scissor" && computerChoice === "rock") {
    console.log("You Lose! Rock beats Scissor.");
    computerChoice++;
  }
  else if (humanChoice === "scissor" && computerChoice === "paper") {
    console.log("You Win! Scissor beats Paper.");
    humanChoice++;
  }
  else {
    console.log("Tie!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);