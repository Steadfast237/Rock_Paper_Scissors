const CHOICES = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * CHOICES.length);
  const selectedString = CHOICES[randomNumber];

  return selectedString;
}

function getHumanChoice() {
  const userChoice = prompt(`Select a string below and enter it : -
  rock
  paper
  scissors`).toLowerCase();

  if (CHOICES.includes(userChoice)) {
    return userChoice;
  }

  return getHumanChoice();
}

function playRound(humanChoice, computerChoice) {
  // Rock beats scissors
  // scissors beat paper, and
  // paper beats rock.

  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;

    console.log('You Win! Rock beats Scissors');
    console.log(humanScore);
    return;
  }

  if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;

    console.log('You Win! Scissors beats Paper');
    console.log(humanScore);
    return;
  }

  if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;

    console.log('You Win! Paper beats Rock');
    console.log(humanScore);
    return;
  }

  if (humanChoice === computerChoice) {
    console.log(
      `No Winner! ${capitalize(humanChoice)} draws ${capitalize(humanChoice)}`
    );
    console.log(humanScore, computerScore);
    return;
  }

  computerScore++;

  console.log(
    `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`
  );
  console.log(computerScore);
  return;
}

function capitalize(_string) {
  //1- pick the first letter in the string
  const firstLetter = _string.slice(0, 1).toUpperCase();

  //2- join and return the newly formed string
  return firstLetter + _string.slice(1).toLowerCase();
}

function playGame() {
  for (let round = 1; round <= 5; round++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    console.log(
      `human scored ${humanScore} : computer scored ${computerScore}`
    );
    console.log('Human won the GAME!!');
    return;
  }

  console.log(`human scored ${humanScore} : computer scored ${computerScore}`);
  console.log('Computer won the GAME!!');
}
