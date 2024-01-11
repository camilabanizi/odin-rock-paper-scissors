let rounds = 0;
let playerScore = 0;
let compScore = 0;
let ties = 0;

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * 3)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === computerSelection) {
    ties++;
    return (result = "It's a tie");
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      result = "You Win! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      compScore++;
      result = "You Lose! Paper beats Rock";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "You Lose! Scissors beats Paper";
      compScore++;
    } else if (computerSelection === "rock") {
      playerScore++;
      result = "You Win! Paper beats Rock";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      result = "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock") {
      result = "You Lose! Rock beats Scissors";
      compScore++;
    }
  }
  rounds++;
  return result;
}

function game() {
  while (rounds <= 5) {
    let playerSelection = prompt("What's your choice?");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    console.log(playerScore);
    console.log(compScore);
    console.log(ties);
  }
  if (playerScore > compScore) {
    console.log("Game over, you win!");
  } else if (compScore > playerScore) {
    console.log("Game over, you lose");
  } else if (ties > playerScore || compScore) {
    console.log("Game over, it's a tie");
  }
}

game();

/* function resetGame() {
  playerScore = 0;
  compScore = 0;
  ties = 0;
} */
