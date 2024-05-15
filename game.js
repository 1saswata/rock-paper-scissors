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

function getHumanChoice() {
    let humanChoice = "";
    let answer = prompt("Enter your pick - Rock / Paper / Scissors:");
    humanChoice = answer.toLowerCase();
    //TODO Check if entered value is anything other than expected value
    console.log(`You have chosen ${humanChoice}.`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let newGame = 1;
function playRound(humanChoice, computerChoice) {
    if (newGame === 1) {
        result.textContent = "\nStarting a new game! \n";
        newGame = 0;
    }
    result.textContent += `----------------------\nRound ${humanScore + computerScore + 1}:\n`;
    result.textContent += `Computer has chosen ${computerChoice}.\n`;
    result.textContent += `You have chosen ${humanChoice}.\n`;
    //If both choices are same, no one wins
    if(humanChoice === computerChoice) 
        result.textContent += "Draw! No score. Redo the round!\n";
    else {
    //If choices aren't same, rock beats scissors, paper beats rock, scissors 
    //beat paper. 
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    humanScore++;
                    result.textContent += `You win! ${humanChoice + " beats " 
                    + computerChoice}.\n`;
                }
                else {
                    computerScore++;
                    result.textContent += `You lose! ${computerChoice + " beats " 
                    + humanChoice}.\n`;
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    humanScore++;
                    result.textContent += `You win! ${humanChoice + " beats " 
                    + computerChoice}.\n`;
                }
                else {
                    computerScore++;
                    result.textContent += `You lose! ${computerChoice + " beats " 
                    + humanChoice}.\n`;
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    humanScore++;
                    result.textContent += `You win! ${humanChoice + " beats " 
                    + computerChoice}.\n`;
                }
                else {
                    computerScore++;
                    result.textContent += `You lose! ${computerChoice + " beats " 
                    + humanChoice}.\n`;
                }
                break;
        }
        result.textContent += `Current Score -\nYou: ${humanScore} | Computer: ${computerScore}\n`;
        if (humanScore + computerScore === 5) {
            if(humanScore > computerScore)
                result.textContent += "\nCongrats, you win the game!";
            else
            result.textContent += "\nNT, you lose the game.";
            humanScore = 0;
            computerScore = 0;
            newGame = 1;
        }
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button)=> {
    button.addEventListener("click", ()=>playRound(button.textContent.toLowerCase(), getComputerChoice()));
    }
)
const result = document.querySelector("#result");
