console.log("Hello")
/* Pseudocode:
When the user chooses rock paper or scissor
choose a random choice of rock paper or scissors
if output beats input, print loss
else print win
*/

function getComputerChoice() {
    const computerchoice = Math.random()
    if (computerchoice < 0.33) {
        return "rock";
    } else if
    (computerchoice > 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
        
   
    
}
console.log(getComputerChoice())