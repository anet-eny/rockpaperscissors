let choices = ["rock", "paper", "scissors"]



let playerChoice = ""

let playRound = function() {
    const computerSelection = choices[Math.floor(Math.random() * 3)]
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
    playGame()
})
document.querySelector(".btnPaper").addEventListener("click", function(){
    playerChoice = "paper"
    result.textContent = playRound()
    playGame()
})
document.querySelector(".btnScissors").addEventListener("click", function(){
    playerChoice = "scissors"
    result.textContent = playRound()
    playGame()
})
   
let scorePlayer = 0
let scoreComputer = 0


let playGame = function(){
    
    
    const roundResult = playRound()
    
    if(roundResult === "player wins"){
        scorePlayer++
    } else if(roundResult === "computer wins"){
        scoreComputer++
    }
    console.log(roundResult)

    let score = document.querySelector(".score p")
    if (!score){
        score = document.createElement("p")
        document.querySelector(".score").appendChild(score)
    } 
    score.textContent = `Player: ${scorePlayer}/5 Computer: ${scoreComputer}/5 `

    let gameResult = document.querySelector("score p.game-result")
    if (!gameResult){
        gameResult = document.createElement("p")
        gameResult.classList.add("game-result")
        document.querySelector(".score").appendChild(gameResult)
    }

    if(scorePlayer === 5){
        console.log("player wins the game")
        gameResult.textContent = "Player wins the game"
        scorePlayer = 0
        scoreComputer = 0
        

    } else if(scoreComputer === 5){
        console.log("computer wins the game")
        gameResult.textContent = "Computer wins the game"
        scorePlayer = 0
        scoreComputer = 0
        
    } else {
        gameResult.textContent = ""
    }
    
}

