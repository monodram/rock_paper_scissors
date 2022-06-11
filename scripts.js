// randomly generates computer choice
let rockPaperScissors = ['rock', 'paper', 'scissors'];
function computerPlay(rockPaperScissors) {
    return Math.floor(Math.random() * rockPaperScissors.length);
};

let playerScore = 0;
let computerScore = 0;
let whoWinsRound = 0;
let computerSelection = computerPlay(rockPaperScissors);

// decides who wins a single round and gives +1 point to the winner
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 1)) {
        return computerScore++,
        whoWinsRound = 1;

    } else if ((playerSelection == 'paper') && (computerSelection == 2)) {
        return computerScore++,
        whoWinsRound = 1;

    } else if ((playerSelection == 'scissors') && (computerSelection == 0)) {
        return computerScore++,
        whoWinsRound = 1;

    } else if ((playerSelection == 'rock') && (computerSelection == 2)) {
        return playerScore++,
        whoWinsRound = 2;

    } else if ((playerSelection == 'paper') && (computerSelection == 0)) {
        return playerScore++,
        whoWinsRound = 2;

    } else if ((playerSelection == 'scissors') && (computerSelection == 1)) {
        return playerScore++,
        whoWinsRound = 2;

    } else {
        return whoWinsRound = 0;
    }
};

// window alert that shows who won a single round
function roundScore() {
    if (whoWinsRound == 2) {
        alert(`You won this round. 
        Your score: ${playerScore} Computer score: ${computerScore}`);

    } else if (whoWinsRound == 1) {
        alert(`You lost this round.
        Your score: ${playerScore} Computer score: ${computerScore}`);

    } else {
        alert('It\'s a tie. Try again.');
    }
};

// loops the game until someone wins 3 rounds
for (let i = 0; i < 15; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    let roundResult = playRound(playerSelection, computerSelection);
    roundScore(roundResult);
    if (playerScore == 3) {
        alert('You\'ve won! Congratulations :)');
        break;

    } else if (computerScore == 3) {
        alert('You\'ve lost :( Better luck next time.');
        break;
    }
};
