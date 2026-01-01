const createPara = document.createElement('p');
const createPara2 = document.createElement('p')
const createPara3 = document.createElement('p')
const createPara4 = document.createElement('p')
const createPara5 = document.createElement('p')
const choiceDisplay = document.getElementById('choice-display')
const humanDisplay = document.getElementById('human-choice')
const computerDisplay = document.getElementById('computer-choice')
let humanContainer = document.querySelector('.human-container')
const humanContainerStyle = humanContainer.style;
const roundMessage = document.getElementById('round-message')
const finalRoundMsg = document.getElementById('final-round-message')
const roundsDisplay = document.getElementById('round-display')
let comDecals = document.querySelector('.computer-decals')
let humDecals = document.querySelector('.human-decals')
let rounds = 0;
const MAXROUNDS = 5;
let humanScore = 0;
let computerScore = 0;

comDecals.textContent = `${computerScore}`
humDecals.textContent = `${humanScore}`
function getComputerChoice() {
  let choices = ["rock","paper","scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex]
}

let start = document.getElementById('start');
start.addEventListener('click', () => {
    humanContainer.style.display = 'block';
    start.style.display = 'none';
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    
    createPara.textContent = '';
  choiceDisplay.appendChild(createPara)
  createPara2.textContent = '';
  choiceDisplay.appendChild(createPara2)
  createPara4.textContent = '';
  roundsDisplay.appendChild(createPara4);
    createPara4.textContent = '';
  roundsDisplay.appendChild(createPara4);

})






let newround = document.getElementById('newround')
newround.addEventListener ('click',() => {
  createPara.textContent = '';
  choiceDisplay.appendChild(createPara)
  createPara2.textContent = '';
  choiceDisplay.appendChild(createPara2)
  createPara4.textContent = '';
  roundsDisplay.appendChild(createPara4);
    createPara4.textContent = '';
  roundsDisplay.appendChild(createPara4);
 

})


newround.addEventListener('click', () => {
    ++rounds;
    enableButtons();
    roundsDisplay.textContent = `${rounds}`;
    humDecals.textContent = `${humanScore}`
    comDecals.textContent = `${computerScore}`;
    roundsDisplay.appendChild(createPara5);
    document.body.style.backgroundColor = 'black';
})

newround.addEventListener('click', finalMessage,);

function fiveRounds() {
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    disableButtons();
    
}


function finalMessage() {
    if(rounds === MAXROUNDS) {
    if(humanScore > computerScore) {
        createPara4.textContent="Victory! You win this round!";
       finalRoundMsg.appendChild(createPara4)
       document.body.style.backgroundColor = 'green';
    } else if (computerScore > humanScore){ 
       
        createPara4.textContent="DOOM! Computer wins this round!";
        finalRoundMsg.appendChild(createPara4);
        document.body.style.backgroundColor = 'red';
    } else {
        createPara4.textContent="No Winner! Rematch?";
        finalRoundMsg.appendChild(createPara4);
    }; 
    
    fiveRounds();    
} 
}
    

newround.addEventListener ('click',() => {
  createPara.textContent = '';
  choiceDisplay.appendChild(createPara)
  createPara2.textContent = '';
  choiceDisplay.appendChild(createPara2);
  createPara3.textContent = '';
  choiceDisplay.appendChild(createPara3)
})


const buttons = document.querySelectorAll('button:not(#newround,#start');
    let humanChoice = '';   
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        humanChoice = `${button.value}`
        });
        
        button.addEventListener('click', () => {
        createPara.textContent = `"${humanChoice}"`;
        humanDisplay.appendChild(createPara)
        })
        
        // button.addEventListener('click',() => {
        // playRound()
        // })    

        // button.addEventListener('click', () => {
        // getComputerChoice();
            
        // })

        button.addEventListener('click', (event) => {   
            playRound(event.target.id)
            disableButtons();

        })

       
    })

function disableButtons() {
        buttons.forEach(button => {
            button.disabled = true;
        })
    }

function enableButtons() {
        buttons.forEach(button => {
            button.disabled = false;
        })
    }






    // let computerChoice = getComputerChoice().toLowerCase();

    function playRound() {
    let computerChoice = getComputerChoice().toLowerCase();
    console.log(computerChoice);

    createPara2.textContent = `"${computerChoice}"`;
            computerDisplay.appendChild(createPara2);

 
    if (computerChoice === humanChoice) {
       createPara3.textContent ="It's a tie.";
       return roundMessage.appendChild(createPara3)
    } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        ++humanScore;
        createPara3.textContent =`You win! ${humanChoice} beats ${computerChoice}`;
       return roundMessage.appendChild(createPara3)
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
        )
{
        ++computerScore;
        createPara3.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
       return roundMessage.appendChild(createPara3)
    }

}
