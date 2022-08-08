let choices = ["rock", "paper", "scissor"];
let comment = "";
let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random()*9) % 3];
}

function gameRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    switch(playerChoice) {
        case "rock": {
            if (computerChoice === "rock") {
                comment = "Tie Game";
            } else if (computerChoice === "paper") {
                computerScore++;
                comment = "Computer Wins :(! Paper beat Rock";
            } else {
                playerScore++;
                comment = "You Win!!! Rock beat Scissor";
            }
        }
        break;
        case "paper": {
            if (computerChoice === "rock") {
                playerScore++;
                comment = "You Win!!! Paper beat Rock";
            } else if (computerChoice === "paper") {
                comment = "Tie Game";
            } else {
                computerScore++;
                comment = "Computer Wins :(! Scissor beat Paper";
            }
        }
        break;
        case "scissor": {
            if (computerChoice === "rock") {
                computerScore++;
                comment = "Computer Wins :(! Rock beat Scissor";
            } else if (computerChoice === "paper") {
                playerScore++;
                comment = "You Win!!! Paper beat Scissor";
            } else {
                comment = "Tie Game";
            }
        }
        break;
        default: {
            comment = "Not a valid option";
        }
    }

    document.getElementById("roundComment").textContent = comment;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (playerScore >= 5) {
        document.getElementById("roundComment").textContent = "You Win the Game!!!!";
        tryAgain();
    }

    if (computerScore >= 5) {
        document.getElementById("roundComment").textContent = "Computer Wins the Game :(";
        tryAgain();
    }
}

function tryAgain() {
    let resetGame = prompt("Want to Play Again??? Yes/No");
    if(resetGame.toLowerCase() === "yes") {
        computerScore = 0;
        playerScore = 0;
        document.getElementById("roundComment").textContent = "";
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    } else {
        playerChoices.forEach((button) => {
            button.removeEventListener("click", buttonListener)
        })
    }
}

function buttonListener(e) {
    let selectedButton = e.target;
    let playerChoice = selectedButton.getAttribute('data-value');
    gameRound(playerChoice, getComputerChoice());
}

const playerChoices = document.querySelectorAll(".playerSelection");

playerChoices.forEach((button) => {
    button.addEventListener("click", buttonListener);
})