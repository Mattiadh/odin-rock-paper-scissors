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
    let humanPrompt = prompt("Choose rock, paper or scissors. Be mindful of spelling!")

}



