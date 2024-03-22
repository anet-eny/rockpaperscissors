let choices = ["rock", "paper", "scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
} 

let playerChoice = ""

let chooseRock = function(){
    playerChoice = "rock"
    console.log("Player choice:rock")
}
let choosePaper = function(){
    playerChoice = "paper"
    console.log("Player choice:paper")
}
let chooseScissors = function(){
    playerChoice = "scissors"
    console.log("Player choice:scissors")
}

document.querySelector(".btnRock").addEventListener("click", chooseRock)
document.querySelector(".btnPaper").addEventListener("click", choosePaper)
document.querySelector(".btnScissors").addEventListener("click", chooseScissors)


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
    
    
    const playerSelection = playerChoice
    const computerSelection = getComputerChoice()
    const roundResult = playRound(playerSelection, computerSelection)
    
    if(roundResult === "player wins"){
        scorePlayer++
    } else if(roundResult === "computer wins"){
        scoreComputer++
    }
    console.log(`Result: ${roundResult}`)
    
    if(scorePlayer > scoreComputer){
        console.log("Player is the winner")
    } else {
        console.log("Computer is the winner")
    }
}
playGame()
