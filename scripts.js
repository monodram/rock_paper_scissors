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
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    } 
};

buttons.forEach((button) => {
    button.addEventListener('click', () => { 
        if (button.id == 'rockButton') {
            playerSelection = 'rock';

        } else if (button.id == 'paperButton') {
            playerSelection = 'paper';

        } else if (button.id == 'scissorsButton') {
            playerSelection = 'scissors';
        }
        computerSelection = computerChoice(); // with every button click it triggers a function to generate new random computer's choice
        playRound(playerSelection, computerSelection); // triggers a function to decide who wins
    });
})

function playRound(playerSelection, computerSelection) { // simulates the round and decides who wins a single round

    if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
        whoWinsRound = 'computer';
        computerScore++;

    } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        whoWinsRound = 'computer';
        computerScore++;

    } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        whoWinsRound = 'computer';
        computerScore++;

    } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        whoWinsRound = 'player';
        playerScore++;

    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        whoWinsRound = 'player';
        playerScore++;

    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        whoWinsRound = 'player';
        playerScore++;

    } else {
        whoWinsRound = 'draw';
    }
    console.log(whoWinsRound);
};


/*
    function roundScore() { //shows alert window with score after every round   
        if (whoWinsRound == 'player') {
            alert(`${playerSelection} beats ${computerSelection}. You won this round. 
            Your score: ${playerScore} Computer score: ${computerScore}`);
    
        } else if (whoWinsRound == 'computer') {
            alert(`${playerSelection} gets beaten by ${computerSelection}. You lost this round.
            Your score: ${playerScore} Computer score: ${computerScore}`);
    
        } else {
            alert('It\'s a tie. Try again.');
        }
    };
*/

/*
for (let i = 0; i < 15; i++) { // loops the game until someone wins 3 rounds
    game();

    if (playerScore == 3) {
        alert('You\'ve won! Congratulations :)');
        break;

    } else if (computerScore == 3) {
        alert('You\'ve lost :( Better luck next time.');
        break;
    }
};
*/

/*
console.log(computerSelection);
console.log(playerSelection);
console.log(whoWinsRound);
*/