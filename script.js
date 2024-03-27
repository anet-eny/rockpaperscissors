let choices = ["rock", "paper", "scissors"]
let scorePlayer = 0
let scoreComputer = 0

let updateScoreDisplay = function(){
    let scoreDisplay = document.querySelector(".score p")
    if(!scoreDisplay){
        scoreDisplay = document.createElement("p")
        document.querySelector(".score").appendChild(scoreDisplay)
    }
    scoreDisplay.textContent = `Player: ${scorePlayer}/5 Computer: ${scoreComputer}/5`
}

let updateRoundResult = function(result){
    let roundResult = document.querySelector(".results p")
    if(!roundResult){
        roundResult = document.createElement("p")
        document.querySelector(".results").appendChild(roundResult)
    }
    if(result === "player wins"){
        if(scorePlayer === 5) {
            roundResult.textContent = "Player wins the game"
        } else {
            roundResult.textContent = "Player wins this round"
        }
    } else if (result === "computer wins") {
        if(scoreComputer === 5) {
            roundResult.textContent = "Computer wins the game"
        } else {
            roundResult.textContent = "Computer wins this round"
        }    
    } else if (result === "tie") {
        roundResult.textContent = "Tie"
    } else {
        roundResult.textContent = ""
    }
}


let playRound = function(playerSelection) {
    const computerSelection = choices[Math.floor(Math.random() * 3)]
    
    
    let pComputer = document.querySelector(".h1-computer p")
    if (!pComputer){
        pComputer = document.createElement("p")
        document.querySelector(".h1-computer").appendChild(pComputer)
    }
    
    let pPlayer = document.querySelector(".h1-player p")
    if (!pPlayer){
        pPlayer = document.createElement("p")
        document.querySelector(".h1-player").appendChild(pPlayer)
    }
    
    pComputer.textContent = computerSelection
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


document.querySelector(".btnRock").addEventListener("click", function(){
    const result = playRound("rock")
    if(result === "player wins") {
        scorePlayer++
    } else if(result === "computer wins") {
        scoreComputer++
    }
    updateScoreDisplay()
    updateRoundResult(result)
})
document.querySelector(".btnPaper").addEventListener("click", function(){
    const result = playRound("paper")
    if(result === "player wins") {
        scorePlayer++
    } else if(result === "computer wins") {
        scoreComputer++
    }
    updateScoreDisplay()
    updateRoundResult(result)
})
document.querySelector(".btnScissors").addEventListener("click", function(){
    const result = playRound("scissors")
    if(result === "player wins") {
        scorePlayer++
    } else if(result === "computer wins") {
        scoreComputer++
    }
    updateScoreDisplay()
    updateRoundResult(result)
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

