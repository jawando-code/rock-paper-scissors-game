
function getComputerChoice() {
  let computerResult = Math.floor(Math.random() * 3) +1

if(computerResult === 1) {
    return 'rock'
} else if(computerResult === 2) {
    return 'paper'
} else if (computerResult === 3){
    return 'scissors'
}

}

function getHumanChoice() {
    let userResult = prompt("Enter choice","",);
    return userResult;    
}



let humanScore = 0;
let computerScore = 0;

function playRound() {
    const computerChoice = getComputerChoice().toLowerCase();
    const humanChoice = getHumanChoice().toLowerCase();

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`)

    if (computerChoice === humanChoice) {
        return console.log("It's a tie.")
    } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`SCORES: You: ${++humanScore}, Computer: ${computerScore}`)
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
       console.log(`SCORES: You: ${humanScore}, Computer: ${++computerScore}`)
        return console.log( `You lose! ${computerChoice} beats ${humanChoice}`)
        
    }

    
  

}

function playGame(){
    for(let i = 0; i < 5; i++)
playRound();
    if(humanScore > computerScore) {
        console.log("FINAL SCORE: You win this round!")
    } else if (computerScore > humanScore){ 
        console.log("FINAL SCORE: Computer wins this round!")
    } else {
        console.log("Nobody wins! Play Again")
    }
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
}

playGame()
