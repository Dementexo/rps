let computerScore = 0;
let playerScore = 0;
let tempPlayerInput;

game();

function computerPlay(mainChoice){
    let decider=Math.floor(Math.random()*10);
    if (decider <= 3){
        mainChoice="rock";
        return mainChoice;
    }
    else if (decider >= 3 && decider <= 6){
        mainChoice = "paper";
        return mainChoice;
    }
    else if (decider >= 6 && decider <= 9){
        mainChoice = "scissors";
        return mainChoice;
    }
}

function playRound(){
    let playerSelection = prompt();
    let computerSelection = computerPlay();
    let playerTurn=playerSelection.toLowerCase();
    tempPlayerInput = playerTurn;
    if(playerTurn == "rock"){
        if(computerSelection == "rock"){
            console.log("You both chose rock, tie!");
        }
        else if(computerSelection == "paper"){
            console.log("You chose rock and the computer chose paper, you lose!");
            ++computerScore;
        }
        else if(computerSelection == "scissors"){
            console.log("You chose rock and the computer chose scissors, you win!");
            ++playerScore;
        }
    }
    if(playerTurn == "paper"){
        if(computerSelection == "paper"){
            console.log("You both chose paper, tie!");
        }
        else if(computerSelection == "scissors"){
            console.log("You chose paper while the computer chose scissors, you lose!");
            ++computerScore;
        }
        else if(computerSelection == "rock"){
            console.log("You chose paper while the computer chose rock, you win!");
            ++playerScore;
        }
    }
    if(playerTurn == "scissors"){
        if(computerSelection == "scissors"){
            console.log("You both chose scissors, tie!");
        }
        else if(computerSelection == "rock"){
            console.log("You chose scissors while the computer chose rock, you lose!");
            ++computerScore;
        }
        else if(computerSelection == "paper"){
            console.log("You chose scissors while the computer chose paper, you win!");
            ++playerScore;
        }
    }
}

function game(){
    console.log("Welcome to rock, paper, scissors! You will be fighting against the computer.")
    for (i=0; i=5;){
        playRound();
        if (computerPlay() != tempPlayerInput){
            ++i;
        }
        if (computerScore >= 3){
            console.log("The computer wins! You lose HAHAHAHAHA!")
            break;
        }
        else if (playerScore >= 3){
            console.log("You win, that's cool... I guess.")
            break;
        }
    }
}