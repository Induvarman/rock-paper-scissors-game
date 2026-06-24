function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "tie";
  }
  else if ((humanChoice === "rock" && computerChoice === "scissor") || 
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissor" && computerChoice === "paper")) {
    return "player";
  }
  else {
    return "computer";
  }
}

function playGame(e) {
  const humanChoice = e.target.className;
  const computerChoice = getComputerChoice();

  const roundResult = playRound(humanChoice, computerChoice);
  round.textContent = `Round ${++roundNum}`

  if (roundResult === "player") {
  playerScore.textContent = ++humanScore;
  }
  else if (roundResult === "computer") {
  computerScore.textContent = ++botScore;
  }

  const isGameOver = (humanScore === 5 || botScore === 5);

  if (isGameOver) {
    declareChamp();
    resetGame();
  }
  else {
  champ.textContent = "⁉️";
  }
}

function declareChamp() {
  const matchWinner = (humanScore > botScore)? "You" : "Computer";
  champ.textContent = matchWinner;
}

function resetGame() {
  humanScore = 0;
  botScore = 0;
  roundNum = 0;
  playerScore.textContent = humanScore;
  computerScore.textContent = botScore;
  round.textContent = `Play Again`;
}