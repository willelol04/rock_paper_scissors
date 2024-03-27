

function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3 + 1);
    
    switch (randNum) {

        case 1:
            return("rock");
            break;
        case 2:
            return("paper");
            break;
        case 3:
            return("scissors");
            break;

    }
}



function playGame(playerSelection, computerSelection) {
    let output = "";

    output += ("player chose " + playerSelection);
    output += ("\ncomputer chose " + computerSelection + "\n");


    switch (playerSelection) {
        case "rock":
            if(computerSelection == "scissors") {
                output += ("Player wins!");
                playerWins ++;

            
            }
            else if (computerSelection == "paper") {
                output+= ("Computer wins!");
                computerWins++;

            }
            else {
                output += ("It's a tie");
                ties++;

            }
            break;


        case "scissors":
            if(computerSelection == "paper") {
                output += ("Player wins!");
                playerWins ++;

            }
            else if (computerSelection == "rock") {
                output += ("Computer wins!");
                computerWins++;


            }
            else {
                output += ("It's a tie");
                ties++;
            }
            break;


        default:
            if(computerSelection == "rock") {
                output += ("Player wins!");
                playerWins ++;


            
            }
            else if (computerSelection == "scissors") {
                output += ("Computer wins!");
                computerWins++;


            }
            else {
                output += ("It's a tie");
                ties++;
                
            }
            break;



        

    
        
        

    }
    return(output);


}
let gameInd = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;


function playGames(playerSelection, computerSelection) {
    output = "";


    if(playerWins < 5 && computerWins < 5) {
        gameInd ++;
        output += ("Game #" + gameInd);
        game = playGame(playerSelection, computerSelection);
        output += "\n" + game;
        output += ("\n-------------------------\n" + "Player wins:" + playerWins + "\nComputer wins:" + computerWins + "\nTies: " + ties);

    }
    

    if(playerWins == 5) {
        output = ("Player won: " + playerWins + " - " + computerWins);

    }
    if(computerWins == 5) {
        return("Computer won: " + playerWins + " - " + computerWins);

    }
    return(output);
}



btns = document.querySelectorAll(".button");
score = document.querySelector(".score");
score.innerText = "Start the game!";

reset = document.querySelector(".reset")

btns.forEach((element) => element.addEventListener("click", () => score.innerText = (playGames(element.innerText, getComputerChoice()))));

reset.addEventListener("click", () => {
    ties = 0;
    gameInd = 0;
    computerWins = 0;
    playerWins = 0;
    score.innerText = "Start the game!";
})



