
/* Pseudocode:
computer chooses 1 of 3 options and returns string
When the user chooses rock paper or scissor
choose a random choice of rock paper or scissors
if output beats input, print loss
else print win
*/

function getComputerChoice() {
    const cChoice = Math.random()
    if (cChoice < 0.33) {
        return "rock";
    } else if
        (cChoice > 0.66) {
        return "paper"
    } else {
        return "scissors"
    }

}


function getHumanChoice() {
    const hChoice = prompt("Write rock, paper or scissors!")
    return hChoice.toLowerCase()
}



let humanscore = 0
let computerscore = 0

function playRound(humanchoice, computerchoice) {
    if ((computerchoice == "paper" && humanchoice == "scissors") || (computerchoice == "scissors" && humanchoice == "rock") || (computerchoice == "rock" && humanchoice == "paper")) {
        console.log("The computer chose " + computerSelection + "!")
        console.log(`You win!${humanchoice} beats ${computerchoice}`)
        humanscore = humanscore +1 
        console.log ("Your score: " + humanscore + ". Computer score: " + computerscore + ".")
    } else if (computerchoice === humanchoice) {
        console.log("The computer chose " + computerSelection + "! ")
        console.log("It's a tie!")
    }
        else {
        console.log("The computer chose " + computerSelection + "!")
        console.log(`You loose! ${computerchoice} beats ${humanchoice}`)
          computerscore = computerscore +1 
        console.log ("Your score: " + humanscore + ". Computer score: " + computerscore + ".")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playGame() {
    playRound(humanSelection, computerSelection)
}

playGame()