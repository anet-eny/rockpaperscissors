let choices = ["rock", "paper", "scissors"]



let playRound = function(playerSelection) {
    const computerSelection = choices[Math.floor(Math.random() * 3)]
    
    
    const pComputer = document.querySelector(".h1-computer p")
    if (!pComputer){
        const pComputer = document.createElement("p")
        document.querySelector(".h1-computer").appendChild(pComputer)
    }
    pComputer.textContent = computerSelection

    
    const pPlayer = document.querySelector(".h1-player p")
    if (!pPlayer){
        const pPlayer = document.createElement("p")
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

// let result = document.querySelector(".results p")
//     if (!result){
//         result = document.createElement("p")
//         document.querySelector(".results").appendChild(result)
//     } 

let scorePlayer = 0
let scoreComputer = 0

document.querySelector(".btnRock").addEventListener("click", function(){
    const result = playRound("rock")
    if(result === "player wins") {
        scorePlayer++
    } else if(result === "computer wins") {
        scoreComputer++
    }
})
document.querySelector(".btnPaper").addEventListener("click", function(){
    const result = playRound("paper")
    if(result === "player wins") {
        scorePlayer++
    } else if(result === "computer wins") {
        scoreComputer++
    }
})
document.querySelector(".btnScissors").addEventListener("click", function(){
    const result = playRound("scissors")
    if(result === "player wins") {
        scorePlayer++
    } else if(result === "computer wins") {
        scoreComputer++
    }
})
   


// let playGame = function(){
    
    
//     const roundResult = playRound()
    
//     if(roundResult === "player wins"){
//         scorePlayer++
//     } else if(roundResult === "computer wins"){
//         scoreComputer++
//     }
//     console.log(roundResult)

//     let score = document.querySelector(".score p")
//     if (!score){
//         score = document.createElement("p")
//         document.querySelector(".score").appendChild(score)
//     } 
//     score.textContent = `Player: ${scorePlayer}/5 Computer: ${scoreComputer}/5 `

//     let gameResult = document.querySelector("score p.game-result")
//     if (!gameResult){
//         gameResult = document.createElement("p")
//         gameResult.classList.add("game-result")
//         document.querySelector(".score").appendChild(gameResult)
//     }

//     if(scorePlayer === 5){
//         console.log("player wins the game")
//         gameResult.textContent = "Player wins the game"
//         scorePlayer = 0
//         scoreComputer = 0
        

//     } else if(scoreComputer === 5){
//         console.log("computer wins the game")
//         gameResult.textContent = "Computer wins the game"
//         scorePlayer = 0
//         scoreComputer = 0
        
//     } else {
//         gameResult.textContent = ""
//     }
    
// }

