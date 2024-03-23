

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

    console.log("player chose", playerSelection.toLowerCase());
    console.log("computer chose", computerSelection);

    switch (playerSelection.toLowerCase()) {
        case "rock":
            if(computerSelection == "scissors") {
                return("Player wins!");
            
            }
            else if (computerSelection == "paper") {
                return("Computer wins!");
            }
            else {
                return("It's a tie");
            }
            break;

        case "scissors":
            if(computerSelection == "paper") {
                return("Player wins!");
            
            }
            else if (computerSelection == "paper") {
                return("Computer wins!");
            }
            else {
                return("It's a tie");
            }
            break;

        default:
            if(computerSelection == "rock") {
                return("Player wins!");
            
            }
            else if (computerSelection == "scissors") {
                return("Computer wins!");
            }
            else {
                return("It's a tie");
            }
            break;

        
            
    
        
        

    }

}



function playGames() {
    gameInd = 1;
    playerWins = 0;
    computerWins = 0;

    while(gameInd <= 5) {
        console.log("Game #", gameInd);
        game = playGame(getPlayerMove(), getComputerChoice());
        console.log(game);

        if(game == "Computer wins!") {
            computerWins++;
        }
        if(game == "Player wins!") {
            playerWins++;
        }
        
        gameInd ++;

    }

    console.log("-------------------------\n", "Player wins:", playerWins, "\nComputer wins:", computerWins);

}

function getPlayerMove() {
    return prompt("rock, paper or scissors?");
}


playGames();

