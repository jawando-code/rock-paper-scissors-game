const createPara = document.createElement('p');
const createPara2 = document.createElement('p')
const computerContainer = document.getElementById('computer-container')

function showComputerChoice(str) {
    
    createPara.textContent = str;
    computerContainer.appendChild(createPara);
        
}

const buttons = document.querySelectorAll('button');
let humanChoice = '';
buttons.forEach((button) => {
        button.addEventListener('click', () => {
        humanChoice = `${button.value}`;
      })


button.addEventListener('click', () => {
    createPara.textContent = `You select: ${humanChoice}`;
    computerContainer.appendChild(createPara)

})

button.addEventListener('click', () => {
    getComputerChoice();
})

button.addEventListener('click', () => {
    createPara2.textContent = `Computer selects: ${computerChoice}`;
    computerContainer.appendChild(createPara2)
})

button.addEventListener('click',() => {
    playRound()
})


function getComputerChoice() {
  let computerResult = Math.floor(Math.random() * 3) +1
    if(computerResult === 1) {
        return 'rock'
    } else if(computerResult === 2) {
        return 'paper' 
    } else if (computerResult === 3){
        return 'rock'
    }    
}



let humanScore = 0;
let computerScore = 0;


    const computerChoice = getComputerChoice().toLowerCase();

function playRound() {

    if (computerChoice === humanChoice) {
        return console.log("It's a tie.")
    } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`SCORES: You: ${++humanScore}, Computer: ${computerScore}`)
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
        )
    
{
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

// playGame()


     
})
// }
// para.textContent = `You selected ${buttons.value}`;
//         document.container.appendChild(para);
  




