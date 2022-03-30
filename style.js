//TODO: user chooses r, p, s
//TODO: cpu chooses r, p, s
//TODO: determine winner, show to user 
//TODO: display stats
//TODO: ask to play again

var answers = ["rock", "paper", "scissors"];
var wins = 0;
var losses = 0;
var ties = 0;

function playGame() {

    var userChoice = prompt("Rock, paper, or scissors?");
    
    userChoice = userChoice.toLowerCase();

    var valid = checkResponse(userChoice);

    if (!valid) {
        return playGame();
    }
    
    var cpuResponse = cpuChoice();

    compare(cpuResponse, userChoice);

    playAgain();

}

function checkResponse(userChoice) {
    
    let responseCheck = answers.includes(userChoice);

    if (responseCheck) {
        console.log(userChoice);
        return true;
    } else {
        alert("Choose rock, paper or scissors only.")
        return false;
    }

}

function cpuChoice() {

    var randomPick = Math.floor(Math.random() * answers.length);

    var computerAnswer = answers[randomPick];

    console.log(computerAnswer);

    return computerAnswer;
}

function compare(cpuChoice, userChoice) {
   
    if (cpuChoice === userChoice) {
        alert("It's a tie!");
        ties++;
    } else if ((cpuChoice === 'rock' && userChoice === 'paper' ) || (cpuChoice === 'paper' && userChoice === 'scissors' ) || (cpuChoice === 'scissors' && userChoice === 'rock')) {
        alert("You win!");
        wins++;
    } else {
        alert("You lose!");
        losses++;
    }
}

function playAgain() {
    
    alert('Wins: ' + wins + ' Losses: ' + losses + ' Ties: ' + ties);
    
    var replay = confirm("Would you like to play again?");

    if (replay) {
        playGame();
    } else {
        return;
    }
}

playGame();

