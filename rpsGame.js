
//this controls the number of round we want to play.
const gameRounds = 5

//Create a function to generate a random integer number between 0 and 2.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
//Create a function to getComputerChoice select R P or S.
//Call Random ineteger generate for a number between 0-2
//if 0 then return rock
//if 1 then return paper
//if 2 then return scissors
function getComputerChoice() {
    const cpuChoice = getRandomInt(3); 
    if (cpuChoice === 0) {
        return "Rock";
    }
    
    else if (cpuChoice === 1) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
        
}

// Create a function to getHumanChoice.
// Prompt user to provide answer - "rock, paper or scissors
// amend returned answer to consistent casing
// If value matches rock paper or scissors. Amend human variable to new value
// Else show an invalid answer alert, start function again and Return the result of the function

function getHumanChoice() {
    let humanChoice = prompt (`Choose your weapon!\nRock, Paper or Scissors?`);

    humanChoice = humanChoice.trim();
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
// Create a function for playRound, compare values of human and cpu
// return a win lose or draw value.

function playRound(human,cpu) {

    if ( human === cpu) {
        return "draw";
    }

    const humanWins = 
    (human === "Rock" && cpu === "Scissors") ||
    (human === "Scissors" && cpu === "Paper") || 
    (human === "Paper" && cpu === "Rock");

    if (humanWins)  {
        return "win";
    }
        
    else {
        return "lose";
    }
    }

    
// create function playGame
//Create a variable for human score and computer score value = 0
// Create for loop number of rounds, If less than 5 increase by 1
//Create a const variable to collect cpu choice.
//Create a const variable to collect human choice.
//create a round result variable to collect the result of each round
// call play round for result
// increase human score if win, computer score is lose.
// call round winner message
// when rounds = 5
// call game winner message
 
function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < gameRounds; i++) {

        const cpu = getComputerChoice();
        const human = getHumanChoice();
        const result = playRound(human,cpu);

        if (result === "win") { 
            humanScore++
        }

        if (result === "lose") { 
            computerScore++
        }

    showRoundWinner(result, human, cpu, humanScore, computerScore);
        }

    showGameWinner(humanScore, computerScore)   
        }



//create function to show winner message for each round
function showRoundWinner(result, human, cpu, humanScore, computerScore) {
    if (result === "draw") {
        console.log(`Computer plays ${cpu}, ${human} draws with ${cpu}!\nHuman : ${humanScore}    Computer : ${computerScore}`);

        alert(`Computer plays ${cpu}, ${human} draws with ${cpu}! \nYou : ${humanScore}    Computer : ${computerScore}`);
        return;
    }  

    if (result === "win") {
        console.log(`Computer plays ${cpu}, ${human} beats ${cpu}\nHuman : ${humanScore}    Computer : ${computerScore}`);
            
        alert(`Computer plays ${cpu}, ${human} beats ${cpu}!\nYou : ${humanScore}    Computer : ${computerScore}`)
    }

    if (result==="lose") {
        console.log(`Computer plays ${cpu}, ${human} is beaten by ${cpu}!\nHuman : ${humanScore}    Computer : ${computerScore}` );
            
        alert(`Computer plays ${cpu}, ${human} is beaten by ${cpu}!\nYou : ${humanScore}    Computer : ${computerScore}` )
    }

}

//create function show winner message for game
//if scores are equal, a draw.
//if human score is greater, human wins.
//if computer score is greater, computer wins
function showGameWinner (humanScore, computerScore) {
    if (humanScore === computerScore) {
        console.log(`A tie! \nHuman : ${humanScore}    Computer : ${computerScore}`);

        alert(`A tie!!\nYou : ${humanScore}    Computer : ${computerScore}\n`);
        return;
    }
    
    if (humanScore > computerScore) { 
        console.log(`Final Score\nHuman : ${humanScore}    Computer : ${computerScore}\nHuman Wins`);

        alert(`Final Score\nYou : ${humanScore}    Computer : ${computerScore}\nCongratulations! You Win!`);
        return;
    }
                
    if (humanScore < computerScore) {
        console.log(`Final Score\nHuman : ${humanScore}    Computer : ${computerScore}\nHuman loses`);
        
        alert(`Final Score\nYou : ${humanScore}    Computer : ${computerScore}\nBad luck, Maybe next time.`);
        return;
    }
}

//Call to play the game NOW
playGame() 




	



	
		


		
		
