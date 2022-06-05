console.log("Welcome to Rock Paper Scissors! Please input your choice.");

const playerSelection = prompt();


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
    else if (decider >6 && decider <=9){
        mainChoice = "scissors";
        return mainChoice;
    }
}

const computerSelection = computerPlay();

function playRound(){
    let playerTurn=playerSelection.toLowerCase();
    if(playerTurn == "rock"){
        if(computerSelection == "rock"){
            console.log("You both chose rock, tie!");
        }
        else if(computerSelection == "paper"){
            console.log("You chose rock and the computer chose paper, you lose!");
        }
        else if(computerSelection == "scissors"){
            console.log("You chose rock and the computer chose scissors, you win!");
        }
    }
    if(playerTurn == "paper"){
        if(computerSelection == "paper"){
            console.log("You both chose paper, tie!");
        }
        else if(computerSelection == "scissors"){
            console.log("You chose paper while the computer chose scissors, you lose!");
        }
        else if(computerSelection == "rock"){
            console.log("You chose paper while the computer chose rock, you win!");
        }
    }
    if(playerTurn == "scissors"){
        if(computerSelection == "scissors"){
            console.log("You both chose scissors, tie!");
        }
        else if(computerSelection == "rock"){
            console.log("You chose scissors while the computer chose rock, you lose!");
        }
        else if(computerSelection == "paper"){
            console.log("You chose scissors while the computer chose paper, you win!");
        }
    }
}

playRound();