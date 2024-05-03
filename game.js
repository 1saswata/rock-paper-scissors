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

function getHumanChoice() {
    let userChoice = "";
    let answer = prompt("Enter your pick - Rock / Paper / Scissors:");
    userChoice = answer.toLowerCase();
    //TODO Check if entered value is anything other than expected value
    return userChoice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer has chosen ${computerChoice}.`);
    //If both choices are same, noone wins
    if(humanChoice === computerChoice) 
        console.log("Draw! No score.");
    else {
    //If choices aren't same, rock beats scissors, paper beats rock, scissors 
    //beat paper. 
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    humanScore++;
                    console.log(`You win! ${humanChoice + " beats " 
                    + computerChoice}.`);
                }
                else {
                    computerScore++;
                    console.log(`You lose! ${computerChoice + " beats " 
                    + humanChoice}.`);
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    humanScore++;
                    console.log(`You win! ${humanChoice + " beats " 
                    + computerChoice}.`);
                }
                else {
                    computerScore++;
                    console.log(`You lose! ${computerChoice + " beats " 
                    + humanChoice}.`);
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    humanScore++;
                    console.log(`You win! ${humanChoice + " beats " 
                    + computerChoice}.`);
                }
                else {
                    computerScore++;
                    console.log(`You lose! ${computerChoice + " beats " 
                    + humanChoice}.`);
                }
                break;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
