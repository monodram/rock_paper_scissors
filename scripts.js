
let rockPaperScissors = ['rock', 'paper', 'scissors'];

// randomly generates computer choice
function computerPlay(rockPaperScissors) {
    return Math.floor(Math.random() * rockPaperScissors.length);
};

let playerScore = 0;
let computerScore = 0;
let whoWinsRound = '';
let computerSelection = computerPlay(rockPaperScissors);

// decides who wins a single round
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 1)) {
        return computerScore++,
        whoWinsRound == 'computer';

    } else if ((playerSelection == 'paper') && (computerSelection == 2)) {
        return computerScore++,
        whoWinsRound == 'computer';

    } else if ((playerSelection == 'scissors') && (computerSelection == 0)) {
        return computerScore++,
        whoWinsRound == 'computer';

    } else if ((playerSelection == 'rock') && (computerSelection == 2)) {
        return playerScore++,
        whoWinsRound == 'player';

    } else if ((playerSelection == 'paper') && (computerSelection == 0)) {
        return playerScore++,
        whoWinsRound == 'player';

    } else if ((playerSelection == 'scissors') && (computerSelection == 1)) {
        return playerScore++,
        whoWinsRound == 'player';

    } else {
        console.log('It\'s a tie. Try again.');
    }
};

// plays round 5 times
for (i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
    let roundResult = playRound(playerSelection, computerSelection);
    roundScore(roundResult);
};

function roundScore(roundResult) {
    if (whoWinsRound == 'player') {
        alert('You won this round');
    } else {
        alert('You lost this round');
    }
};

function gameScore() {

};















