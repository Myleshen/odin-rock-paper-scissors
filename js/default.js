let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*9) % 3];
}

function gameRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    switch(playerChoice) {
        case "rock": {
            if (computerChoice === "rock") {
                return "Tie Game";
            } else if (computerChoice === "paper") {
                return "Computer Wins :(! Paper beat Rock";
            } else {
                return "You Win!!! Rock beat Scissors";
            }
        }
        break;
        case "paper": {
            if (computerChoice === "rock") {
                return "You Win!!! Paper beat Rock";
            } else if (computerChoice === "paper") {
                return "Tie Game";
            } else {
                return "Computer Wins :(! Scissors beat Paper";
            }
        }
        break;
        case "scissors": {
            if (computerChoice === "rock") {
                return "Computer Wins :(! Rock beat Scissors";
            } else if (computerChoice === "paper") {
                return "You Win!!! Paper beat Scissors";
            } else {
                return "Tie Game";
            }
        }
        break;
        default: {
            return "Not a valid option";
        }
    }
}

function game() {
    for(i=0; i < 5; i++) {
        console.log(gameRound(prompt("rock/paper/scissors"), getComputerChoice()));
    }
}

game(); 
