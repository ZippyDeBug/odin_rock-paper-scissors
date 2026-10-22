console.log("hellos World!")

//Create a const variable for computerSelection value = getComputerChoice
const computerSelection = getComputerChoice;

//Create a const variable for humanSelection, value = getHumanChoice
const humanSelection = getHumanChoice;


// Play 5 rounds.
//create variable for gameRounds, value set at 5. and games played at 0
const gameRounds = 5
let gamesPlayed = 0


//Create a const variable for humanScore value = 0
let humanScore = 0

//Create  a const variable for computerScore value = 0
let computerScore = 0


//Create a function to generate a random integer number between 0 and 2.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Create a function to getComputerChoice select R P or S.
//Randomly generate a integer number between 0-2
//if 0 then return rock
//if 1 then return paper
//if 2 then return scissors
function getComputerChoice() {
        let cpuChoice = getRandomInt(3); 
        if (cpuChoice === 0) {
            return "Rock";
        }
        else if (cpuChoice === 1) {
            return "Paper";
        }
        else {
            return "Scissors";
        }
        console.log(cpuChoice)
        
}

// Create a function to getHumanChoice.
// Prompt user to provide answer - "rock, paper or scissors
// amend returned answer to consistent casing
// If value matches rock paper or scissors. Amend human variable to new value
// Else show an invalid answer alert, start function again and Return the result of the function

function getHumanChoice() {

       let humanChoice = prompt (`Choose your weapon! 
        Rock, Paper or Scissors?`);

        humanChoice = (humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase());  
        if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
            console.log(humanChoice);
            return humanChoice;
        }
        else {
            alert("Invalid answer");
            return getHumanChoice();
        } 
}




// Playing  a single round
// Create a function for playRound ,  placeholders humanChoice and computerChoice.
    // If humanChoice = rock & computerChoice = scissors 
	// or humanChoice = scissors & computerChoice = paper
	// or humanChoice = paper & computerChoice = rock
    // increment humanScore value by 1.
    //If human and computer match, declare draw message.
    //Anything else, Computer score increases by 1, The  message states "You lose! computerChoice beats humanChoice!"

function playRound(human,cpu) {
    if (human == "Rock" && cpu === "Scissors" || 
        human === "Scissors" && cpu === "Paper" || 
        human === "Paper" && cpu === "Rock") {    
        humanScore++ ; 
        console.log(`Computer plays ${cpu}, ${human} beats ${cpu}
Human ${humanScore}    Computer ${computerScore}`);

        alert(`Computer plays ${cpu}, ${human} beats ${cpu}!
You ${humanScore}    Computer ${computerScore}`);
        }

    else if ( human == cpu) {    
        console.log(`Computer plays ${cpu}, ${human} draws with ${cpu}!
Human ${humanScore}    Computer ${computerScore}`);
        alert(`Computer plays ${cpu}, ${human} draws with ${cpu}!
You ${humanScore}    Computer ${computerScore}`);
        }
    else if (human === undefined) {
        console.log("undefined");
    
    }
    else {
        computerScore++;
        console.log(`Computer plays ${cpu}, ${human} is beaten by ${cpu}!
Human ${humanScore}    Computer ${computerScore}` )
        alert(`Computer plays ${cpu}, ${human} is beaten by ${cpu}!
You ${humanScore}    Computer ${computerScore}` )
    };
    }

    
// create function playGame
//reset score
// Create for loop for gameCount,  If less than 5, increase by 1, 
// Else gameCount equal to or greater than 5,
// if human score > computer score
//message: "Congratulations you win!"
// Else message "Bad luck, computer wins!"
 
function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (gamesPlayed = 0; gamesPlayed < gameRounds; gamesPlayed++) {
        playRound(humanSelection(),computerSelection())
        }
    if (gamesPlayed >= gameRounds) { 
            if (humanScore > computerScore) {
                console.log(`Final Score
Human ${humanScore}    Computer ${computerScore}
Human Wins`);
                alert(`Final Score
You ${humanScore}    Computer ${computerScore}
Congratulations! You Win!`);
                }
            else if (humanScore < computerScore) {
                console.log(`Final Score
Human ${humanScore}    Computer ${computerScore}
Human loses`);
                alert(`Final Score
You ${humanScore}    Computer ${computerScore}
Bad luck, you lose!`);
                }

                else if (humanScore == computerScore) {
                console.log(`A tie!!
Human ${humanScore}    Computer ${computerScore}`);
                alert(`A tie!! 
You ${humanScore}    Computer ${computerScore} 
Care to try again?`);
                }
        }
     
    }

//Call to play the game NOW
playGame() 




	



	
		


		
		
