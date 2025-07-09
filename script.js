let humanScore = 0;
let computerScore = 0;
let round = 0;
let tie = 0;

const body = document.querySelector('body');
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const humanScoreText = document.querySelector('#humanScore');
const computerScoreText = document.querySelector('#computerScore');
const roundText = document.querySelector('#round');
const tieText = document.querySelector('#tie');

roundText.textContent = round.toString();
humanScoreText.textContent = humanScore.toString();
computerScoreText.textContent = computerScore.toString();
tieText.textContent = tie.toString();

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice(), round));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice(), round));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice(), round));


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

// function getHumanChoice(playerChoice) {
//     // let playerChoice = prompt('Enter choice (rock, paper, or scissors): ');
//     const formattedChoice = playerChoice.toLowerCase();
//     return formattedChoice;
// }

function playRound(humanChoice, computerChoice) {
    let outcome = humanChoice + computerChoice;
    let capitalizedHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    let capitalizedComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    switch (outcome) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.textContent = `It\'s a tie! You both chose ${capitalizedHumanChoice}.`;
            tie++;
            tieText.textContent = tie.toString();
            round++;
            roundText.textContent = round.toString();
            break;

        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            result.textContent = `You win! ${capitalizedHumanChoice} beats ${capitalizedComputerChoice}.`;
            humanScore++;
            humanScoreText.textContent = humanScore.toString();
            round++;
            roundText.textContent = round.toString();
            break;

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            result.textContent = `You lose! ${capitalizedHumanChoice} loses to ${capitalizedComputerChoice}.`;
            computerScore++;
            computerScoreText.textContent = computerScore.toString();
            round++;
            roundText.textContent = round.toString();
            break;

        default:
            console.log(result);
            round++;
            roundText.textContent = round.toString();
    }

    if (round === 5) {
        gameOver();
        return;
    }
}

function gameOver() {
    if (humanScore > computerScore){
        result.textContent = 'You won!';
    } else if (humanScore < computerScore){
        result.textContent = 'You lost!';
        
    } else {
        result.textContent = 'It\'s a tie!';
    }

    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    scissorsBtn.style.display = 'none';

    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent = 'Play Again?';
    playAgainBtn.addEventListener('click', () => location.reload());

    body.append(playAgainBtn);
}

// function playGame() {
//     humanScore = 0;
//     computerScore = 0;
//     rounds = 5;
//     // for (let i = 1; i <= rounds; i++){
//     //     const humanChoice = getHumanChoice();
//     //     const computerChoice = getComputerChoice();
//     //     playRound(humanChoice, computerChoice, i);
//     // }

//     if (humanScore > computerScore){
//         console.log(`You won! Score: ${humanScore} || Computer Score: ${computerScore} || Ties: ${5 - (humanScore+computerScore)}`);
//     } else if (humanScore < computerScore){
//         console.log(`You lost! Score: ${humanScore} || Computer Score: ${computerScore} || Ties: ${5 - (humanScore+computerScore)}`);
        
//     } else {
//         console.log(`It\'s a tie! Score: ${humanScore} || Computer Score: ${computerScore} || Ties: ${5 - (humanScore+computerScore)}`);
//     }
// }

// playGame();



