let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // declare a list of strings containing "rock","paper,"scissors"
  const CHOICES = ['rock', 'paper', 'scissors'];

  // randomly select a string from the list
  const randomNumber = Math.floor(Math.random() * CHOICES.length);
  const selectedString = CHOICES[randomNumber];

  // return the selected string
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

  //3- check if the user string matches one of the strings in (2)
  if (CHOICES.includes(userChoice)) {
    return userChoice;
  }

  //4- prompt back the user to make the correct choice
  return getHumanChoice();
}
