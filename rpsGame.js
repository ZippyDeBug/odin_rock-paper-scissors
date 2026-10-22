console.log("hellos World!")

    //Create a const variable for computerSelection value = getComputerChoice
const computerSelection = getComputerChoice;

//Create a const variable for humanSelection, value = getHumanChoice
const humanSelection = getHumanChoice;


// Play 5 rounds.
//create variable for gameRounds, value set at 5. and hames played at 0
const gameRounds = Number(5)
let gamesPlayed = Number(0)


//Create a const variable for humanScore value = 0
let humanScore = Number(0)

//Create  a const variable for computerScore value = 0
let computerScore = Number(0)

//Create a const variable for numberOfGames  , value = humanScore + computerScore.
let numberOfGames = (humanScore + computerScore)

//Create a function to generate a random integer number between 0 and 2.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Create a function to getComputerChoice select R P or S.
function getComputerChoice() {
//Randomly generate a integer number between 0-2
        let cpuChoice = getRandomInt(3); 
//if 0 then return rock
        if (cpuChoice === 0) {
            return "rock";
        }
//if 1 then return paper
        else if (cpuChoice === 1) {
            return "paper";
        }
//if 2 then return scissors
        else {
            return "scissors";
        }
        console.log(cpuChoice)
        
}

// Create a function to getHumanChoice.
function getHumanChoice() {
// Prompt user to provide answer - "rock, paper or scissors
       let humanChoice = prompt `Choose your weapon! 
        Rock, Paper or Scissors?`;
// amend returned answer to consistent casing
        humanChoice = humanChoice.slice(0).toLowerCase();  
// If value matches rock paper or scissors. Amend human variable to new value
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log(humanChoice);
            return humanChoice;
        }
// Else start function again
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
    if (human == "rock" && cpu === "scissors" || 
        human === "scissors" && cpu === "paper" || 
        human === "paper" && cpu === "rock") {    
        humanScore++ ; 
        console.log(`You win!
            ${human} beats ${cpu}!`);
        alert(`You win!
            ${human} beats ${cpu}!`);
        }
    else if ( human == cpu) {    
        console.log(`A Draw!?
            ${human} draws with ${cpu}!`);
        alert(`A Draw!?
            ${human} draws with ${cpu}!`);
        }
    else if (human === "undefined") {
        console.log("undefined");

    }
    else {
        computerScore++;
        console.log(`You lose!
            ${human} is beaten by ${cpu}!` )
        alert(`You lose!
            ${human} is beaten by ${cpu}!` )

    }
    }

    
// create function playGame
// Create for loop for gameCount,  If less than 5, increase by 1, 
// Else gameCount equal to or greater than 5,
// if human score > computer score
//message: "Congratulations you win!"
// Else message "Bad luck, computer wins!"
 
function playGame() {
    for (gamesPlayed = 0; gamesPlayed < gameRounds; gamesPlayed++) {
        if (gamesPlayed < gameRounds) {
            playRound(humanSelection(),computerSelection())
        }}
    if (gamesPlayed >= gameRounds) { 
            if (humanScore > computerScore) {
                console.log(`Congratulations! 
                    You Win!`);
                alert(`Congratulations! 
                    You Win!`);
                }
            else if (humanScore < computerScore) {
                console.log("Bad luck, you lose!");
                alert("Bad luck, you lose!");
                }

                else if (humanScore == computerScore) {
                console.log("A tie!! Care to try again?");
                alert("A tie!! Care to try again?");
                }

                else {
                return
                }
        }
     
    }

    //Call to play the game NOW
playGame()




	



	
		


		
		
