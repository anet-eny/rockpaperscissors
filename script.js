let choices = ["Rock", "Paper", "Scissors"]

let getComputerChoice = function(){
    let computerChoice = Math.floor(Math.random() * 3)
    return choices[computerChoice]
}

let result = getComputerChoice()
console.log(result)