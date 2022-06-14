
let playerScore = 0;
let computerScore = 0;
let whoWinsRound = '';

function game() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();

    function computerPlay() { //generates random computer choice
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
    
    function playerPlay() { 
        return playerChoice = prompt('Rock, Paper or Scissors?').toLowerCase();
    };
    
    function playRound(playerSelection, computerSelection) { //decides who wins the round

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
    };

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

    playRound(playerSelection, computerSelection);
    roundScore();
};


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

/*
console.log(computerSelection);
console.log(playerSelection);
console.log(whoWinsRound);
*/