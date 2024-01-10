let playerScore = 0;
let compScore = 0;
let ties = 0;

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * 3)];
  return choice;
}

let playerSelection = prompt("What's your choice?");
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  let result = "";
  /* console.log("**Player selection:", playerSelection);
  console.log("**Computer selection:", computerSelection); */

  if (playerSelection === computerSelection) return (result = "It's a tie");

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      result = "You Win! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      result = "You Lose! Paper beats Rock";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "You Lose! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      result = "You Win! Paper beats Rock";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      result = "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      result = "You Lose! Rock beats Scissors";
    }
  }
  return result;
}

function selectWinner() {
  if (compScore === 5) {
    return (result = "Game over, you lose");
  } else if (playerScore === 5) {
    return (result = "Game over, you win!");
  }
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  let round = playRound(playerSelection, computerSelection);

  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
    if (round.includes("You win!")) {
      playerScore++;
    } else if (round.includes("You Lose!")) {
      compScore++;
    } else if (round === "It's a tie") {
      ties++;
    }
    console.log(playerScore);
    console.log(compScore);
    console.log(ties);
  }
}
game(playerSelection);

function resetGame() {
  playerScore = 0;
  compScore = 0;
}
