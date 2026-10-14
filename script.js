/*  Plan

rock paper scissors
player is given a prompt, computer makes one automatically
after prompt, the computers' choice is shown followed by a victory, loss, or tie message. 
(or wrong input message)
after round, the player gives a new prompt.
score is tracked and displayed after each combat. 
the game goes for 5 rounds (bo5).
after 5th round, the winner is the one with highest score. 
The player is prompted to play again.
if so the game restarts.

code: 

function getComputerScore()
    SET computerSign to math.random
    divide into 3 ranges and assign strings. return them

function getPlayerScore that gives the player a prompt to write.
    declare a variable that converts the answer to lowercase.
    return lowercase variable.

declare global score variables for both parts.

a function for playing a round (uses player choice and computer choice)

    
    
    IF the player chooses one of the combinations that beats the computer
*/



function getComputerChoice() {
    let computerSign = Math.random();
    if (computerSign < 0.33) {
        return "rock";
    } else if (computerSign > 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanPrompt = prompt("Choose rock, paper or scissors. Be mindful of spelling!");
    let humanLower = humanPrompt.toLowerCase();
    return humanLower;
}

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {

    console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`)
    if (computerChoice === humanChoice) {
        console.log("It's a tie! Go again.");
    } else if ((humanChoice == "paper") || (humanChoice == "rock" || humanChoice == "scissors")) {
        computerScore = computerScore + 1;
        console.log(`The computer won the round. ${computerChoice} beats ${humanChoice}... `)

    } else if
        ((humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
        humanScore = humanScore + 1;
        console.log(`You won the round! ${humanChoice} beats ${computerChoice}!`)

    } else {
        console.log("Wrong input! Check your spelling!");
    }


}
playRound(humanSelection, computerSelection)








