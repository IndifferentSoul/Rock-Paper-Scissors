const SHAPES = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

const playerscore = document.querySelector(".player-wins");
const computerscore = document.querySelector(".computer-wins");
const result = document.querySelector(".result");


//Player plays rock
const rock = document.querySelector("#rock");
rock.addEventListener('click', function (e) {
    playRound("Rock", computerPlay())
    playerscore.textContent = `Player: ${playerWins}`;
    computerscore.textContent = `Computer: ${computerWins}`;
   
    if (playerWins > 4) {
        gameWin();
    } else if (computerWins > 4) {
        gameLoss();
    }
})

//Player plays paper
const paper = document.querySelector("#paper");
paper.addEventListener('click', function (e) {
    playRound("Paper", computerPlay())
    playerscore.textContent = `Player: ${playerWins}`;
    computerscore.textContent = `Computer: ${computerWins}`;

    if (playerWins > 4) {
        gameWin();
    } else if (computerWins > 4) {
        gameLoss();
    }
})

//Player plays scissors
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', function (e) {
    playRound("Scissors", computerPlay())
    playerscore.textContent = `Player: ${playerWins}`;
    computerscore.textContent = `Computer: ${computerWins}`;

    if (playerWins > 4) {
        gameWin();
    } else if (computerWins > 4) {
        gameLoss();
    }
})

//Get a random shape from the SHAPES array
function computerPlay() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie you both played ${playerSelection}.`
    }
    if (playerSelection != computerSelection) {
        if (computerSelection === "Rock") {
            if (playerSelection === "Paper") {
                roundWin (playerSelection, computerSelection)
            }  else {
                roundLoss (playerSelection, computerSelection)
            }
        }

        if (computerSelection === "Paper") {
            if (playerSelection === "Scissors") {
                roundWin (playerSelection, computerSelection)
            } else {
                roundLoss (playerSelection, computerSelection)
            }
        }

        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                roundWin (playerSelection, computerSelection)
            } else {
                roundLoss (playerSelection, computerSelection)

            }
        }
    }
}

function roundWin (playerSelection, computerSelection) {
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`
    playerWins ++;
}

function roundLoss (playerSelection, computerSelection) {
    result.textContent = `You lose! ${playerSelection} doesn't beat ${computerSelection}.`
    computerWins++;
}

function gameWin () {
    alert("Congratulations! You Win!");
    
    playerWins = 0;
    computerWins = 0;

    playerscore.textContent = `Player: ${playerWins}`;
    computerscore.textContent = `Computer: ${computerWins}`;
    result.textContent = '';
}

function gameLoss () {
    alert("The computer wins! Better luck next time!");
    
    playerWins = 0;
    computerWins = 0;

    playerscore.textContent = `Player: ${playerWins}`;
    computerscore.textContent = `Computer: ${computerWins}`;
    result.textContent = '';
}

