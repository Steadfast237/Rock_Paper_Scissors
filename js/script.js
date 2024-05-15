let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  //1- declare a list of strings containing "rock","paper,"scissors"
  const CHOICES = ['rock', 'paper', 'scissors'];

  //2- randomly select a string from the list
  const randomNumber = Math.floor(Math.random() * CHOICES.length);
  const selectedString = CHOICES[randomNumber];

  //3- return the selected string
  return selectedString;
}

function getHumanChoice() {
  //1- get user input
  const userChoice = prompt(`Select a string below and enter it : -
  rock
  paper
  scissors`).toLowerCase();

  //2- declare a list of strings containing "rock","paper,"scissors"
  const CHOICES = ['rock', 'paper', 'scissors'];

  //3- check if the user input matches one of the strings in (2)
  if (CHOICES.includes(userChoice)) {
    return userChoice;
  }

  //4- if not prompt back the user to make the correct choice
  return getHumanChoice();
}

// Rock beats scissors, scissors beat paper, and paper beats rock.

function playRound(humanChoice, computerChoice) {
  //1- check if human choice beats the computer choice
  //   if the case
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    // increase the user score by one
    humanScore++;

    // print a winning announcement message
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

  //2- check for draw
  if (humanChoice === computerChoice) {
    console.log(
      `No Winner! ${capitalize(humanChoice)} draws ${capitalize(humanChoice)}`
    );
    console.log(humanScore, computerScore);
    return;
  }

  //3- player lost
  // increase computer score by one
  computerScore++;

  // print a loose announcement message
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
