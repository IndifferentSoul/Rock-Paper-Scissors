const SHAPES = ["Rock", "Paper", "Scissors"];
let playerWins = 0
let computerWins = 0

//Get a random shape from the SHAPES array
function computerPlay() {
    return SHAPES[Math.floor(Math.random() * SHAPES.length)];
} 

//Ask for users choice in shape and make it case-insensitive
function playerPlay() {
    let choice = prompt("Which shape(rock, paper or scissors) would you like to use?")
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

//Play one round of rock paper scissors and display the result in console
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`It's a tie you both played ${playerSelection}`)
    }
    if (playerSelection != computerSelection) {
        if (computerSelection === "Rock") {
            if (playerSelection === "Paper") {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`)
                playerWins ++;
            }  else {
                console.log(`You lose! ${playerSelection} doesn't beat ${computerSelection}`)
                computerWins++;
            }
        }

        if (computerSelection === "Paper") {
            if (playerSelection === "Scissors") {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`)
                playerWins ++;
            } else {
                console.log(`You lose! ${playerSelection} doesn't beat ${computerSelection}`)
                computerWins++;
            }
        }

        if (computerSelection === "Scissors") {
            if (playerSelection === "Rock") {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`)
                playerWins ++;
            } else {
                console.log(`You lose! ${playerSelection} doesn't beat ${computerSelection}`)
                computerWins++;
            }
        }
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`Round number: ${i}`)
        playRound(playerPlay(), computerPlay())
    }
    
    console.log(`You wins: ${playerWins} Computer wins: ${computerWins}`)
    
    if (playerWins === computerWins) {
        console.log("It's a Tie")
    } else if (playerWins > computerWins) {
        console.log("Congratulations! You Won!")
    } else if (playerWins < computerWins) {
        console.log("You lost! Better luck next time.")
    }
}

game()