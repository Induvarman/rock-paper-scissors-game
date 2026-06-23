function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];

  // let randomNumber = Math.random();
  // let computerResult = "";

  // if (randomNumber >= 0 && randomNumber < 1 / 3)
  //   computerResult = "rock";
  // else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
  //   computerResult = "paper";
  // else if (randomNumber >= 2 / 3 && randomNumber < 1)
  //   computerResult = "scissor";

}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }
  else if (humanChoice === "rock" && computerChoice === "scissor") || 
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
  }
  else {
    computerScore++;
  }

  // if (humanChoice === "rock" && computerChoice === "scissor") {
  //   console.log("You Win! Rock beats Scissor.");
  //   humanScore++;
  // }
  // else if (humanChoice === "rock" && computerChoice === "paper") {
  //   console.log("You Lose! Paper beats rock.");
  //   computerScore++;
  // }
  // else if (humanChoice === "paper" && computerChoice === "rock") {
  //   console.log("You Win! Paper beats Rock.");
  //   humanScore++;
  // }
  // else if (humanChoice === "paper" && computerChoice === "scissor") {
  //   console.log("You Lose! Scissor beats paper.");
  //   computerScore++;
  // }
  // else if (humanChoice === "scissor" && computerChoice === "rock") {
  //   console.log("You Lose! Rock beats Scissor.");
  //   computerScore++;
  // }
  // else if (humanChoice === "scissor" && computerChoice === "paper") {
  //   console.log("You Win! Scissor beats Paper.");
  //   humanScore++;
  // }
  // else {
  //   console.log("Tie!");
  // }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  let humanSelection = "";
  let computerSelection = "";
  for (let i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(`Win : ${humanScore} Lose : ${computerScore}`);
  if (humanScore > computerScore) 
    console.log("You Win the Series!");
  else if (humanScore < computerScore) 
    console.log("Computer Win the Series!")
  else 
    console.log("The Series is Tie!");
}

// playGame();

