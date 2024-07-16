// human choice

let humanChoice

function getHumanChoice (){
   let humanChoice = prompt ("Enter:");
   humanChoice = humanChoice.toLowerCase();

if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice();
}
else {
    alert("Invalid choice, please try again!");
    return getHumanChoice()
}

};

// comp choice

function getComputerChoice () {
    const options = ["Scissors", "Paper", "Rock"];
    const game = [Math.floor(Math.random() * words.length)];
    return options [game];
    }

// Comp + human score

let humanScore = 0;
let computerScore = 0;

// game

function playRound (humanChoice, computerChoice){

    const humanChoiceGame = getHumanChoice();
    const compChoiceGame = getComputerChoice();

    //console.log("You chose: " + humanChoiceGame);
    //console.log("Computer chose: " + compChoiceGame);
}



