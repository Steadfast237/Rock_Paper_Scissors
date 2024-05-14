function getComputerChoice() {
  // declare a list of strings containing "rock","paper,"scissors"
  const CHOICES = ['rock', 'paper', 'scissors'];

  // randomly select a string from the list
  const randomNumber = Math.floor(Math.random() * CHOICES.length);
  const selectedString = CHOICES[randomNumber];

  // return the selected string
  return selectedString;
}
