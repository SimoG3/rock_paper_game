let rock ="rock";
let paper ="paper";
let scissors ="scissors";

let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;

function getComputerChoice() {
    let choices=["rock","paper","sissors"];
    return choices[Math.trunc(Math.random()*3)];
}  

//document.getElementById("demo").innerHTML = getComputerChoice();


// function getHumanChoice() {
//     let HumanChoice = prompt("Welcome to the game ! Choose your pick between: Rock, Paper and Sissors.");
//     if(HumanChoice.toLowerCase() === rock || HumanChoice.toLowerCase() === paper || HumanChoice.toLowerCase() === sissors) {
//         return HumanChoice;
//     }
//     else {
//         let wrongChoice = prompt("Please pick between rock, paper or sissors."); 
//         return wrongChoice;
//     }
// }

let HumanChoice ="";

const rockChoice = document.querySelector(".rock");
const paperChoice = document.querySelector(".paper");
const scissorsChoice = document.querySelector(".scissors");

rockChoice.addEventListener("click", function() { HumanChoice = rock;});
paperChoice.addEventListener("click", function() { HumanChoice = paper;});
scissorsChoice.addEventListener("click", function() { HumanChoice = scissors;});


function playRound(ComputerChoice, HumanChoice) {

    if( (ComputerChoice === rock && HumanChoice === scissors) || 
        (ComputerChoice === paper && HumanChoice === rock) ||
        (ComputerChoice === scissors && HumanChoice === paper)) {
         computerScore++;
         document.querySelector("#scoreBoard").innerHTML = "Your score : " + humanScore + "<br>" +
                                                           "Computer score : " + computerScore; 

    } else if( (HumanChoice === rock && ComputerChoice === scissors) || 
               (HumanChoice === paper && ComputerChoice === rock) ||
               (HumanChoice === scissors && ComputerChoice === paper)) {
                humanScore++;
                document.querySelector("#scoreBoard").innerHTML = "Your score : " + humanScore + "<br>" +
                                                                  "Computer score : " + computerScore;
            }
    else {
        document.querySelector("#drawCase").innerHTML = "It's a draw !";
    }
}


const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", function() { let humanPlay = HumanChoice;
                                                  let computerPlay = getComputerChoice(); 

                                                  playRound(computerPlay, humanPlay);
                                                  if(humanScore === 5){
                                                    document.querySelector("#winner").innerHTML = "You win !"; 
                                                  } else if(computerScore === 5){
                                                    document.querySelector("#winner").innerHTML = "Better luck next time !";
                                                  }
                                                  roundsPlayed++; });
                                                });
                                            

// function playGame() {
//     for(let i=0; i<5; i++){
//         let humanPlay = getHumanChoice();
//         let computerPlay = getComputerChoice();
//         playRound(computerPlay, humanPlay);
//     }

//     if(humanScore > computerScore){
//         console.log("You win !");
//     } else {
//         console.log("Better luck next time !");
//     }
// }

//playGame();






