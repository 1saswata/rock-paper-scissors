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