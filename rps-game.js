let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(humanChoice, computerChoice) {
    const humanChoiceRPS = humanChoice.toLowerCase();
    const compChoiceRPS = computerChoice.toLowerCase();

    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');
    const gameStatusDiv = document.getElementById('gameStatus');

    resultDiv.textContent = `You chose: ${humanChoiceRPS}, Computer chose: ${compChoiceRPS}`;

    if (humanChoiceRPS === compChoiceRPS) {
        resultDiv.textContent += "\nIt's a tie!";
    } else if (
        (humanChoiceRPS === "rock" && compChoiceRPS === "scissors") ||
        (humanChoiceRPS === "paper" && compChoiceRPS === "rock") ||
        (humanChoiceRPS === "scissors" && compChoiceRPS === "paper")
    ) {
        resultDiv.textContent += "\nYou Win!";
        humanScore++;
    } else {
        resultDiv.textContent += "\nYou Lose!";
        computerScore++;
    }

    scoreDiv.textContent = `Scores: Player - ${humanScore}, Computer - ${computerScore}`;

    if (humanScore === 5) {
        gameStatusDiv.textContent = "You Won the game!";
    } else if (computerScore === 5) {
        gameStatusDiv.textContent = "Computer won the game!";
    } else {
        gameStatusDiv.textContent = "The game goes on...";
    }
}

document.getElementById('rockButton').addEventListener('click', function() {
    playGame('rock', getComputerChoice());
});

document.getElementById('paperButton').addEventListener('click', function() {
    playGame('paper', getComputerChoice());
});

document.getElementById('scissorsButton').addEventListener('click', function() {
    playGame('scissors', getComputerChoice());
});
