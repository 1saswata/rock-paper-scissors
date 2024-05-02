let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomRock = Math.random();
    let randomPaper = Math.random();
    let randomScissors = Math.random();
    if (randomRock >= randomPaper && randomRock >= randomScissors)
        return "rock";
    else if (randomPaper >= randomRock && randomPaper >= randomScissors)
        return "paper";
    else
        return "scissors";
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = "";
    let userChoiceNumber = Number(prompt("Enter your pick (1/2/3) - 1 for Rock/ 2 for Paper/ 3 for Scissors:"));
    switch (userChoiceNumber) {
        case 1:
            userChoice = "rock";
            break;
        case 2:
            userChoice = "paper";
            break;
        case 3:
            userChoice = "scissors";
            break;
        default:
            userChoice = null;
    }
    return userChoice;
}

console.log(getHumanChoice());
