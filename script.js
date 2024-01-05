function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * 3)];
  return choice;
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  let result = "";
  console.log("**Player selection:**", playerSelection);
  console.log("**Computer selection:**", computerSelection);

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

let playerSelection = "scissors";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  let score = { wins: 0, losses: 0, ties: 0 };
  let round = playRound(playerSelection, computerSelection);
  let result = "";

  /* if (score.losses >= 5 || computerSelection >= 5) {
    return (result = "Game over, you lose");
  } else if (score.wins >= 5 || computerSelection >= 5) {
    return (result = "Game over, you win!");
  }

  if (round === "You win!") {
    score.wins++;
  } else if (round === "You Lose!") {
    score.losses++;
  } else if (round === "It's a tie") {
    score.ties++;
  }
  console.log(score);*/
}
