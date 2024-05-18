const CHOICES = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('.output');
const outputScore = document.querySelector('.output-score');

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
    showResult(`You Win! Rock beats Scissors`, output);
    return;
  }

  if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    showResult(`You Win! Scissors beats Paper`, output);
    return;
  }

  if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    showResult(`You Win! Paper beats Rock`, output);
    return;
  }

  if (humanChoice === computerChoice) {
    showResult(
      `No Winner! ${capitalize(humanChoice)} draws ${capitalize(humanChoice)}`,
      output
    );
    return;
  }

  computerScore++;
  showResult(
    `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`,
    output
  );
  return;
}

function capitalize(_string) {
  const firstLetter = _string.slice(0, 1).toUpperCase();

  return firstLetter + _string.slice(1).toLowerCase();
}

function addClick(node) {
  node.addEventListener('click', playGame);
}

function showResult(message, node) {
  node.textContent = message;
}

function playGame(e) {
  playRound(e.target.getAttribute('id'), getComputerChoice());

  showResult(
    `human score ${humanScore} : computer score ${computerScore}`,
    outputScore
  );

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      showResult(`Human won the GAME!!`, output);

      buttons.forEach((btn) => (btn.disabled = true));
      return;
    }

    showResult(`Computer won the GAME!!`, output);
    buttons.forEach((btn) => (btn.disabled = true));
  }
}

buttons.forEach(addClick);
showResult(
  `human score ${humanScore} : computer score ${computerScore}`,
  outputScore
);
