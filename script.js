let rock ="rock";
let paper ="paper";
let sissors ="sissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choices=["rock","paper","sissors"];
    return choices[Math.trunc(Math.random()*3)];
}  

//document.getElementById("demo").innerHTML = getComputerChoice();


function getHumanChoice() {
    let HumanChoice = prompt("Welcome to the game ! Choose your pick between: Rock, Paper and Sissors.");
    if(HumanChoice.toLowerCase() === rock || HumanChoice.toLowerCase() === paper || HumanChoice.toLowerCase() === sissors) {
        return HumanChoice;
    }
    else {
        let wrongChoice = prompt("Please pick between rock, paper or sissors."); 
        return wrongChoice;
    }
}


function playRound(ComputerChoice, HumanChoice) {

    if( (ComputerChoice === rock && HumanChoice === sissors) || 
        (ComputerChoice === paper && HumanChoice === rock) ||
        (ComputerChoice === sissors && HumanChoice === paper)) {
         console.log("You lose ! " + ComputerChoice + " beats " + HumanChoice + "!");
         computerScore++; 

    } else if( (HumanChoice === rock && ComputerChoice === sissors) || 
               (HumanChoice === paper && ComputerChoice === rock) ||
               (HumanChoice === sissors && ComputerChoice === paper)) {
                console.log("You win ! " + HumanChoice + " beats " + ComputerChoice + "!");
                humanScore++;
            }
    else { 
        console.log("It's a draw !");
    }
}


function playGame() {
    for(let i=0; i<5; i++){
        let humanPlay = getHumanChoice();
        let computerPlay = getComputerChoice();
        playRound(computerPlay, humanPlay);
    }

    if(humanScore > computerScore){
        console.log("You win !");
    } else {
        console.log("Better luck next time !");
    }
}

playGame();




