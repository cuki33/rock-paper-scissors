// human choice

let humanChoice

function getHumanChoice (){
   let humanChoice = prompt ("Enter:");
   humanChoice = humanChoice.toLowerCase();

if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
}
else {
    alert("Invalid choice, please try again!");
    return getHumanChoice()
}

};

// comp choice

function getComputerChoice () {
    const options = ["scissors", "paper", "rock"];
    const game = Math.floor(Math.random() * 3);
    return options [game];
    }

// Comp + human score

let humanScore = 0;
let computerScore = 0;

// game
/*
function playRound (humanChoice, computerChoice){

    const humanChoiceGame = getHumanChoice();
    const compChoiceGame = getComputerChoice();

console.log("You chose: " + humanChoiceGame);
console.log("Computer chose: " + compChoiceGame);

if (humanChoiceGame === compChoiceGame) {
    console.log("It's a tie!");
} else if (
    (humanChoiceGame === "rock" && compChoiceGame === "scissors") ||
    (humanChoiceGame === "paper" && compChoiceGame === "rock") ||
    (humanChoiceGame === "scissors" && compChoiceGame === "paper")
) {
    console.log("You Win !");
    humanScore++;
} else {
    console.log ("You Lose !");
    computerScore++;
};
console.log('Scores: Human - ${humanScore}, Computer - ${computerScore}');

};

*/


function playingGame (humanChoice, computerChoice) {
const humanChoiceRPS = getHumanChoice();
const compChoiceRPS = getComputerChoice();

console.log("You chose: " + humanChoiceRPS.toLowerCase());
console.log("Computer chose: " + compChoiceRPS.toLowerCase());

if (humanChoiceRPS === compChoiceRPS) {
    console.log("It's a tie !");
} else if (
    (humanChoiceRPS === "rock" && compChoiceRPS === "scissors") ||
    (humanChoiceRPS === "paper" && compChoiceRPS === "rock") ||
    (humanChoiceRPS === "scissors" && compChoiceRPS === "paper")
) {
    console.log("You Win !");
    humanScore++;
} else {
    console.log("You Lose !");
    computerScore++;
};

console.log(`Scores: Player - ${humanScore}, Computer - ${computerScore}`);


if (humanScore === 5) {
    console.log("You Won the game !"); 
} else if (computerScore === 5 ){
    console.log("Computer won the game !");
} else if (computerScore < 5 || humanScore < 5) {
    console.log("The game goes on...");
    return playingGame (humanChoice, computerChoice);
};
}

window.onload = playingGame; 

