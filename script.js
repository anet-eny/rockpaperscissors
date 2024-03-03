let choices = ["rock", "paper", "scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

// let computerSelection = getComputerChoice()
// console.log(computerSelection) 

let playRound = function(playerSelection, computerSelection) {
    let playerSelection2 = playerSelection.toLowerCase()
    if(playerSelection2 === computerSelection){
        return "tie"
    } else if(
        (playerSelection2 === "rock" && computerSelection === "scissors") || (playerSelection2 === "paper" && computerSelection === "rock") || (playerSelection2 === "scissors" && computerSelection === "paper")
    ) {
        return "player wins"
    } else {
        return "computer wins"
    }
}
// const playerSelection = "scissors"
// const computerSelection = getComputerChoice()
// console.log(playRound(playerSelection, computerSelection))

// let roundResult = playRound(playerSelection, computerSelection)

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
