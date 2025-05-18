let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let playerChoice = prompt('Enter choice (rock, paper, or scissors): ');
    const formattedChoice = playerChoice.toLowerCase();
    return formattedChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock'){
        if (computerChoice === 'rock') {
            console.log('It\'s a tie! You both chose Rock.');
            return;
        } else if (computerChoice === 'paper') {
            console.log('You lose! Rock loses to Paper.');
            computerScore++;
            return;
        } else {
            console.log('You win! Rock beats Scissors.');
            humanScore++;
            return;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You win! Paper beats Rock.');
            humanScore++;
            return;
        } else if (computerChoice === 'paper') {
            console.log('It\'s a tie! You both chose Paper.');
            return;
        } else {
            console.log('You lose! Paper loses to Scissors.');
            computerScore++;
            return;
        }    
    } else {
        if (computerChoice === 'rock') {
            console.log('You lose! Scissors loses to Rock.');
            computerScore++;
            return;
        } else if (computerChoice === 'paper') {
            console.log('You win! Scissors beats Paper.');
            humanScore++;
            return;
        } else {
            console.log('It\'s a tie! You both chose Scissors.');
            return;
        }   
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore){
        console.log(`You won ${humanScore} times out of 5 against ${computerScore}`);
    } else if (humanScore < computerScore){
        console.log(`You lost! The computer won ${computerScore} times out of 5 against ${humanScore}`);
        
    } else {
        console.log(`It\'s a tie! Human score: ${humanScore} - Computer score: ${computerScore}`);
    }
}

playGame();



