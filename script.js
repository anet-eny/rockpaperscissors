let choices = ["rock", "paper", "scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
} 

let playerChoice = ""

let playRound = function() {
    let computerSelection = getComputerChoice()
    let playerSelection = playerChoice
    
    let pComputer = document.querySelector(".h1-computer p")
    if (!pComputer){
        pComputer = document.createElement("p")
        document.querySelector(".h1-computer").appendChild(pComputer)
    }
    pComputer.textContent = computerSelection

    
    let pPlayer = document.querySelector(".h1-player p")
    if (!pPlayer){
        pPlayer = document.createElement("p")
        document.querySelector(".h1-player").appendChild(pPlayer)
    }
    pPlayer.textContent = playerSelection
    


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

let result = document.querySelector(".results p")
    if (!result){
        result = document.createElement("p")
        document.querySelector(".results").appendChild(result)
    } 


document.querySelector(".btnRock").addEventListener("click", function(){
    playerChoice = "rock"
    result.textContent = playRound()
})
document.querySelector(".btnPaper").addEventListener("click", function(){
    playerChoice = "paper"
    result.textContent = playRound()
})
document.querySelector(".btnScissors").addEventListener("click", function(){
    playerChoice = "scissors"
    result.textContent = playRound()
})
   

    






// let playGame = function(){
//     let scorePlayer = 0
//     let scoreComputer = 0
    
    
//     const playerSelection = playerChoice
//     const computerSelection = getComputerChoice()
//     const roundResult = playRound(playerSelection, computerSelection)
    
//     if(roundResult === "player wins"){
//         scorePlayer++
//     } else if(roundResult === "computer wins"){
//         scoreComputer++
//     }
//     console.log(`Result: ${roundResult}`)
    
//     if(scorePlayer > scoreComputer){
//         console.log("Player is the winner")
//     } else {
//         console.log("Computer is the winner")
//     }
// }
// playGame()
