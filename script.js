let choices = ["rock", "paper", "scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
} 

// let isValid = function(selection){
//     const validChoices = ["rock", "paper", "scissors"]
//     return validChoices.includes(selection.toLowerCase())
// }

let playRound = function(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection){
        return "tie"
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "player wins"
    } else {
        return "computer wins"
    }
}

let playGame = function(){
    let scorePlayer = 0
    let scoreComputer = 0
    
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter rock, paper or scissors")
        const computerSelection = getComputerChoice()
        const roundResult = playRound(playerSelection, computerSelection)
    
        if(roundResult === "player wins"){
            scorePlayer++
        } else if(roundResult === "computer wins"){
            scoreComputer++
        }
        console.log(`Round ${i + 1}: ${roundResult}`)
    }
    if(scorePlayer > scoreComputer){
        console.log("Player is the winner")
    } else {
        console.log("Computer is the winner")
    }
}
playGame()
