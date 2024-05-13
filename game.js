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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        console.log(`Computer has chosen ${computerChoice}.`);
        //If both choices are same, no one wins
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
    let humanSelection = "";
    let computerSelection= "";
    console.log(`Round ${i+1}: `)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current Score -\n 
    You: ${humanScore} | Computer: ${computerScore}\n`
    if(humanScore > computerScore)
        console.log("Congrats, you win!");
    else if (humanScore === computerScore)
        console.log("GG, it's a draw.");
    else
        console.log("NT, you lose.");
}

playGame();
