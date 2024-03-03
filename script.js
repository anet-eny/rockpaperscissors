let choices = ["rock", "paper", "scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

// let computerSelection = getComputerChoice()
// console.log(computerSelection) 

let playRound = function(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.toLowerCase()
    if(playerSelection2 === "rock" && computerSelection === "rock"){
        return "tie"
    } else if(playerSelection2 === "paper" && computerSelection === "paper"){
        return "tie"
    } else if(playerSelection2 === "scissors" && computerSelection === "scissors"){
        return "tie"
    } else if(playerSelection2 === "rock" && computerSelection === "paper"){
        return "computer wins"
    } else if(playerSelection2 === "rock" && computerSelection === "scissors"){
        return "player wins"
    } else if(playerSelection2 === "paper" && computerSelection === "rock"){
        return "player wins"
    } else if(playerSelection2 === "paper" && computerSelection === "scissors"){
        return "computer wins"
    } else if(playerSelection2 === "scissors" && computerSelection === "rock"){
        return "computer wins"
    } else if(playerSelection2 === "scissors" && computerSelection === "paper"){
        return "player wins"
    }
}
const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))