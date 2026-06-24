const buttons = document.querySelectorAll("button");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const champ = document.querySelector(".champ");
const round = document.querySelector(".round");

let humanScore = 0;
let botScore = 0;
let roundNum = 0; 

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playGame(e);
  })
})