function rockPaperScissors() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let computerTurn = "";
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;


    let endgame = function () {
        console.log("\n\x1b[33m         === GAME OVER ===\x1b[0m\n");
        console.log(`\x1b[33m Game stats Player - ${playerScore} Computer - ${computerScore}\x1b[0m`);
        if (playerScore < computerScore) {
            console.log("\n\x1b[31m === Sorry, you lose! ===\x1b[0m\n");
        } else if (playerScore > computerScore) {
            console.log("\n\x1b[33m === Congrats, you win! ===\x1b[0m\n");
        } else{
            console.log(("\n=== Game is Draw === \n"));
        }

        readline.question("New Game? (Y/N) ", answer => {
            if (answer === "Y" || answer === "y") {
                console.clear();
                readline.close();
                rockPaperScissors();
            } else {
                console.clear()
                console.log("Have a nice day!");
                return readline.close();
            }
        });
    }



    let recursiveAsyncReadLine = function () {

        if (round > 10) {
            endgame();
            return;
        }

        console.log(`Round: ${round}   Score: Player - ${playerScore} Computer - ${computerScore}`);

        readline.question("\nWhat is your choice - Rock, Paper, Scissors, ? (r,p,s) ", playerTurn => {
            if (playerTurn == "r" || playerTurn == "rock") {
                playerTurn = rock;
            } else if (playerTurn == "p" || playerTurn == "paper") {
                playerTurn = paper;
            } else if (playerTurn == "s" || playerTurn == "scissors") {
                playerTurn = scissors;
            } else {
                console.log(("Invalid Input. Try Again..."));
                recursiveAsyncReadLine();
            }

            let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

            switch (computerRandomNumber) {
                case 1: computerTurn = "Rock"; break;
                case 2: computerTurn = "Paper"; break;
                case 3: computerTurn = "Scissors"; break;
            }

            console.log(`\nThe computer choose: ${computerTurn}`);

            if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
                console.log(("\n\x1b[32m ---You win!--- \x1b[0m\n"));
                playerScore++;

            } else if ((playerTurn === rock && computerTurn === rock) || (playerTurn === paper && computerTurn === paper) || (playerTurn === scissors && computerTurn === scissors)) {
                console.log(("\n\x1b[33m ---Draw--- \x1b[0m\n"));

            } else {
                console.log("\n\x1b[31m ---You lose!--- \x1b[0m\n\n");
                computerScore++;

            }

            round++;
            recursiveAsyncReadLine();

        });
    }

    recursiveAsyncReadLine();

}

rockPaperScissors()