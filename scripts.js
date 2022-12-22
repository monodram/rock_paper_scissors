// GAME LOGIC

const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;
let whoWinsRound = '';

let computerSelection = computerChoice();
let playerSelection = '';

function computerChoice() { //generates random computer's choice
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    } 
};

buttons.forEach((button) => {
    button.addEventListener('click', () => { 
        if (button.id == 'rockButton') {
            playerSelection = 'Rock';

        } else if (button.id == 'paperButton') {
            playerSelection = 'Paper';

        } else if (button.id == 'scissorsButton') {
            playerSelection = 'Scissors';
        }
        computerSelection = computerChoice(); // every button click triggers a function to generate new random computer's choice
        playRound(playerSelection, computerSelection); // triggers a function to play the round

    });
})

function playRound(playerSelection, computerSelection) { // "simulates" a single round, decides who wins it and gives a winner 1 point

    if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
        whoWinsRound = 'computer';
        computerScore++;

    } else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
        whoWinsRound = 'computer';
        computerScore++;

    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
        whoWinsRound = 'computer';
        computerScore++;

    } else if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
        whoWinsRound = 'player';
        playerScore++;

    } else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
        whoWinsRound = 'player';
        playerScore++;

    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
        whoWinsRound = 'player';
        playerScore++;

    } else {
        whoWinsRound = 'draw';
    }
    console.log(whoWinsRound);
    updateScore();
    roundScore();
    gameOver();

};

//  GAME LOGIC ENDS HERE

const yourScore = document.getElementById('yourScore');
const oppScore = document.getElementById('opponentScore');
const message = document.getElementById('message');

function updateScore() { // updates score of each player after every round
    yourScore.textContent = `${playerScore}`;
    oppScore.textContent = `${computerScore}`;
};

function roundScore() { // displays info with result after every round
    if (whoWinsRound == 'player') {
        message.textContent = `${playerSelection} beats ${computerSelection}. You won this round.`;

    } else if (whoWinsRound == 'computer') {
        message.textContent = `${playerSelection} is beaten by ${computerSelection}. You lost this round.`;

    } else {
        message.textContent = 'It\'s a tie. Try again.';
    }
};

function gameOver() { // After 5 wins resets the game score and displays a message saying who won the game
    if (playerScore == 5) { 
        playerScore = 0;
        computerScore = 0;
        message.textContent = `You won the game. Congratulations!`;

    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        message.textContent = `You lost the game. Better luck next time!`;
    };
};