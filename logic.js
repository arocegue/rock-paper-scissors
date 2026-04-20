//Cache our DOM for manipulation
const userInput = document.querySelector("#user-choice");
const buttonSubmit = document.querySelector(".button-group");
const winnerContainer = document.querySelector(".winner-wrapper-hidden");
const winnerMessage = document.querySelector(".winner > h2")
const userScoreUI = document.querySelector(".score-wrapper > #user-score > span");
const cpuScoreUI = document.querySelector(".score-wrapper > #cpu-score > span");
const scoreFeed = document.querySelector(".score-feed > ul");
const restartButton = document.querySelector(".winner > button");

//Game Variables
let userScore = 0;
let computerScore = 0;
let round = 0;
const choices = ["rock", "paper", "scissors"];

//Handle all 3 choices through event delegation
buttonSubmit.addEventListener("click" , function(e) {
  if (e.target.tagName === 'BUTTON' && e.isTrusted && round  < 5 && choices.includes(e.target.id)) {
    round++
    playRound(e.target.id);
  }

});

//Restart game option
restartButton.addEventListener("click", function (e) {
  e.preventDefault();
  restartGame();
})

function resetFeed () {
  scoreFeed.replaceChildren();
}

function setUserScoreUI (score) {
  userScoreUI.textContent = score;
}

function setComputerScoreUI(score) {
  cpuScoreUI.textContent = score;
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)]
}


function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "tie";

  if ((userChoice === "rock" && computerChoice === "scissors") || 
      (userChoice === "paper" && computerChoice === "rock") || 
      (userChoice === "scissors" && computerChoice === "paper")) {
    return "user";
  } else {
    return "computer";
  }
}

function playRound (userInput) {
  const userChoice = userInput;
  const computerChoice = getComputerChoice();
  const formatUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  const formatComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  const feedLine = document.createElement("li");
  if(compareChoices(userChoice, computerChoice) === "user"){
    setUserScoreUI(++userScore);
    feedLine.textContent = `You win this round, ${formatUserChoice} beats ${formatComputerChoice}!`
  }else if (compareChoices(userChoice, computerChoice) === "computer") {
    setComputerScoreUI(++computerScore)
    feedLine.textContent = `You lose this round, ${formatComputerChoice} beats ${formatUserChoice}!`
  }else {
    feedLine.textContent = `Tie Round, both of you chose ${formatUserChoice}!`;
  }

  scoreFeed.appendChild(feedLine);
  if (round >= 5){
    concludeGame();
  }
}

function getGameWinner() {
  let message = "";
  if (userScore > computerScore){
    message = `You have won ${userScore}-${computerScore}! Congrats!`
  }else if (userScore < computerScore){
    message = `You lose ${userScore}-${computerScore}! Better luck next time!`
  }else {
    message = `You have tied ${userScore}-${computerScore}!`
  }
  return message;
}

function restartGame() {
  [round, userScore, computerScore] = [0, 0, 0];
  setComputerScoreUI(0);
  setUserScoreUI(0);
  resetFeed();
  winnerContainer.classList.replace("winner-wrapper", "winner-wrapper-hidden");
}

function concludeGame() {
  winnerMessage.textContent = getGameWinner();
  winnerContainer.classList.replace("winner-wrapper-hidden", "winner-wrapper");

}
