let playerScore = 0;
let computerScore = 0;
const computerMoveText = document.getElementById('computerMove'); //retrieves the text stating what move the computer played
const newGameButton = document.getElementById('newGame'); //new game button from html
const controller = new AbortController();

newGameButton.style.display = 'none'; //sets new game button to invisible. Could be done by default in css

//generates a random number from 0 to 2 which determines what the computer plays
function getComputerChoice(){
    let a = Math.floor(Math.random() * 3);
    if(a === 0){
        return "rock";
    }
    else if (a === 1){
        return "scissors";
    }
    else{
        return "paper";
    }
    return null;
}

//decides who won by checking what each player played
function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | Nobody wins, it's a tie";
        return 0;
    }

    else if(player === "rock" && computer === "scissors"){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | You win, rock beats scissors";
        return 1;
    }
    else if(player === "scissors" && computer === "paper"){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | You win, scissors beat paper";
        return 1;
    }
    else if(player === "paper" && computer === "rock"){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | You win, paper beats rock";
        return 1;
    }

    else if(player === "paper" && computer === "scissors"){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | You lose, scissors beat paper";
        return 2;
    }
    else if(player === "rock" && computer === "paper"){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | You lose, paper beats rock";
        return 2;
    }
    else if(player === "scissors" && computer === "rock"){
        computerMoveText.textContent = "The computer played: " + computer.toUpperCase() + " | You lose, rock beats scissors";
        return 2;
    }

    return null;

}

const buttons = document.querySelectorAll('div.buttons > button'); //gets rock paper scissors buttons

//checks which button was clicked and then plays a round with the corresponding choice. Depending on the outcome
// increases the score of the computer, player or neither
function play(clickedButton){
    if(clickedButton.id === 'rock'){
        let result = playRound('rock', getComputerChoice());
        if(result === 1){
            playerScore += 1;
        }
        else if (result === 2){
            computerScore += 1;
        }
    }

    else if(clickedButton.id === 'paper'){
        let result = playRound('paper', getComputerChoice());
        if(result === 1){
            playerScore += 1;
        }
        else if (result === 2){
            computerScore += 1;
        }
    }

    else if(clickedButton.id === 'scissors'){
        let result = playRound('scissors', getComputerChoice());
        if(result === 1){
            playerScore += 1;
        }
        else if (result === 2){
            computerScore += 1;
        }
    }

    document.getElementById('player').textContent = playerScore.toString();
    document.getElementById('computer').textContent = computerScore.toString();
}

//adds event listeners to rock paper scissors buttons and on each click checks whether the maximum score was reached.
// if yes, displays the new game button
Array.from(buttons).forEach(element => {
    element.addEventListener('click', function () {
        play(element);
        if (computerScore === 5 || playerScore === 5){
            announceWinner();
            Array.from(buttons).forEach(a => {a.disabled = true;})
            newGameButton.style.display = 'block';
        }
    })
});

//check which side won the match
function announceWinner(){
    
        if(computerScore === 5){
            document.getElementById('winner').textContent = 'The computer wins!';
        }
        
        else{
            document.getElementById('winner').textContent = 'You win!';
        }
        
}

//listener for the new game button which resets the score, hides the winner of the previous game
// enable the rock paper scissors buttons and hides itself
newGameButton.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player').textContent = playerScore.toString();
    document.getElementById('computer').textContent = computerScore.toString();
    document.getElementById('winner').textContent = '';
    Array.from(buttons).forEach(a => {a.disabled = false;})
    newGameButton.style.display = 'none';
    computerMoveText.textContent = "";
})
