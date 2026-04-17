let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
  let userChoice = "";
  while (!choices.includes(userChoice)){
    userChoice = prompt("Please Enter: Rock, Paper, or Scissors").toLowerCase();
  }

  return userChoice;
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

function playRound () {
  const userChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  const formatUserChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
  const formatComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  if(compareChoices(userChoice, computerChoice) === "user"){
    userScore++;
    console.log(`You win this round, ${formatUserChoice} beats ${formatComputerChoice}!`);
  }else if (compareChoices(userChoice, computerChoice) === "computer") {
    computerScore++;
    console.log(`You lose this round, ${formatComputerChoice} beats ${formatUserChoice}!`);
  }else {
    console.log(`Tie Round, both of you chose ${formatUserChoice}!`);
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


function gameStart() {
  for (let i = 0; i < 5; ++i) {
    playRound();
  }
  console.log(getGameWinner());
}

gameStart();