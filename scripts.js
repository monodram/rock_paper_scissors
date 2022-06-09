
let rockPaperScissors = ['rock', 'paper', 'scissors'];

// randomly generates computer choice
function computerPlay(rockPaperScissors) {
    return Math.floor(Math.random() * rockPaperScissors.length);
};

// plays the round and decides who wins
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 1)) {
        return alert('Paper beats rock. You lost.');

    } else if ((playerSelection == 'paper') && (computerSelection == 2)) {
        return alert('Scissors beats paper. You lost.');

    } else if ((playerSelection == 'scissors') && (computerSelection == 0)) {
        return alert('Rock beats scissors. You lost.');

    } else if ((playerSelection == 'rock') && (computerSelection == 2)) {
        return alert('Rock beats scissors. You won.');

    } else if ((playerSelection == 'paper') && (computerSelection == 0)) {
        return alert('Paper beats rock. You won.');

    } else if ((playerSelection == 'scissors') && (computerSelection == 1)) {
        return alert('Scissors beats paper. You lost.');

    } else {
        return alert('It\'s a tie. Try again.');
    }
}

const computerSelection = computerPlay(rockPaperScissors);
const playerSelection = prompt().toLowerCase();
const round = playRound(playerSelection, computerSelection);


// plays playRound 5 times
function game() {
    for(let i = 0; i < 5; i++) {
        if ()
    }
}















