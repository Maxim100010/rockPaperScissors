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

function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer){
        console.log("Nobody wins, it's a tie");
        return 0;
    }

    else if(player === "rock" && computer === "scissors"){
        console.log("you win, rock beats scissors");
        return 1;
    }
    else if(player === "scissors" && computer === "paper"){
        console.log("you win, scissors beat paper");
        return 1;
    }
    else if(player === "paper" && computer === "rock"){
        console.log("you win, paper beats rock");
        return 1;
    }

    else if(player === "paper" && computer === "scissors"){
        console.log("you lose, scissors beat paper");
        return 2;
    }
    else if(player === "rock" && computer === "paper"){
        console.log("you lose, paper beats rock");
        return 2;
    }
    else if(player === "scissors" && computer === "rock"){
        console.log("you lose, rock beats scissors");
        return 2;
    }

    return null;

}

function Game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let playerChoice = "";

    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Input either rock, paper, or scissors");
        let result = playRound(playerChoice, getComputerChoice())
        if(result === 1){
            scorePlayer++;
        }
        else if(result === 2){
            scoreComputer++;
        }
        console.log("The score is: Player " + scorePlayer.toString() + ":" + scoreComputer.toString() + " Computer");
    }

    let winner = "";

    if(scorePlayer > scoreComputer){
        winner = "Player";
    }

    else if(scorePlayer < scoreComputer){
        winner = "Computer";
    }

    else {
        winner = "No one, it's a tie";
    }

    console.log("");

    console.log("The FINAL score is: Player " + scorePlayer.toString() + ":" + scoreComputer.toString() + " Computer");
    console.log("The winner is: " + winner); 

}