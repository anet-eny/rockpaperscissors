let choices = ["rock", "paper", "scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

let computerSelection = getComputerChoice()
console.log(computerSelection)

let playRound = function(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.toLowerCase()
    

}