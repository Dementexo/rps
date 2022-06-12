let computerScore = 0;
let playerScore = 0;
let startButton = document.getElementById('startButton');
let choiceRock = document.getElementById('choiceRock');
let choicePaper = document.getElementById('choicePaper');
let choiceScissors = document.getElementById('choiceScissors');
let playerSelection;
let roundCounter = 0;
let gameWinner = false;

function computerPlay(){
    let decider=Math.floor(Math.random()*10);
    if (decider <= 3){
        let mainChoice="rock";
        return mainChoice;
    }
    else if (decider >= 3 && decider <= 6){
        let mainChoice = "paper";
        return mainChoice;
    }
    else if (decider >= 6 && decider <= 9){
        let mainChoice = "scissors";
        return mainChoice;
    }
}
function rockSelect_Play(){
    playerSelection = "rock";
    playRound();
}
function paperSelect_play(){
    playerSelection = "paper";
    playRound();
}
function scissorsSelect_play(){
    playerSelection = "scissors";
    playRound();
}

function playRound(){
    let computerSelection = computerPlay();
    if (playerScore != 3 && computerScore != 3){
        if(playerSelection == "rock"){
            if(computerSelection == "rock"){
                console.log("You both chose rock, tie!");
                document.getElementById("announcementBox").innerHTML = "You both chose rock, tie!";
            }
            else if(computerSelection == "paper"){
                console.log("You chose rock and the computer chose paper, you lose!")
                document.getElementById("announcementBox").innerHTML = "You chose rock and the computer chose paper, you lose!";
                ++computerScore;
            }
            else if(computerSelection == "scissors"){
                console.log("You chose rock and the computer chose scissors, you win!");
                document.getElementById("announcementBox").innerHTML = "You chose rock and the computer chose scissors, you win!";
                ++playerScore;
            }
        }
        if(playerSelection == "paper"){
            if(computerSelection == "paper"){
                console.log("You both chose paper, tie!");
                document.getElementById("announcementBox").innerHTML = "You both chose paper, tie!";
            }
            else if(computerSelection == "scissors"){
                console.log("You chose paper while the computer chose scissors, you lose!");
                document.getElementById("announcementBox").innerHTML = "You chose paper while the computer chose scissors, you lose!";
                ++computerScore;
            }
            else if(computerSelection == "rock"){
                console.log("You chose paper while the computer chose rock, you win!");
                document.getElementById("announcementBox").innerHTML = "You chose paper while the computer chose rock, you win!";
                ++playerScore;
            }
        }
        if(playerSelection == "scissors"){
            if(computerSelection == "scissors"){
                console.log("You both chose scissors, tie!");
                document.getElementById("announcementBox").innerHTML = "You both chose scissors, tie!";
            }
            else if(computerSelection == "rock"){
                console.log("You chose scissors while the computer chose rock, you lose!");
                document.getElementById("announcementBox").innerHTML = "You chose scissors while the computer chose rock, you lose!";
                ++computerScore;
            }
            else if(computerSelection == "paper"){
                console.log("You chose scissors while the computer chose paper, you win!");
                document.getElementById("announcementBox").innerHTML = "You chose scissors while the computer chose paper, you win!";
                ++playerScore;
            }
        }
    }
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    if (playerScore == 3 || computerScore == 3){
        if (playerScore == 3){
            console.log("Player wins!")
            document.getElementById("announcementBox").innerHTML = "You won! Congrats!";
        }
        else if (computerScore == 3){
            console.log("Computer wins!")
            document.getElementById("announcementBox").innerHTML = "You lost! Better luck next time";
        }
    }
}
function gameStart(){
    console.log("Welcome to Rock, Paper, Scissors! Please pick a choice for your first turn.");
    document.getElementById("announcementBox").innerHTML = "Let the game begin!";
    document.getElementById("announcementBox").style.visibility = "visible";
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
    playerScore = 0;
    computerScore = 0;
    choiceRock.addEventListener('click', rockSelect_Play);
    choicePaper.addEventListener('click', paperSelect_play);
    choiceScissors.addEventListener('click', scissorsSelect_play);
}

startButton.addEventListener('click', gameStart);
