console.log("hellos World!")

//Create a const variable for computerSelection value = getComputerChoice()
const computerSelection = getComputerChoice()

//Create a const variable for humanSelection, value = getHumanChoice() 
// const humanSelection = getHumanChoice()

//Create a const variable for humanScore value = 0
//const humanScore = number(0)

//Create  a const variable for computerScore value = 0
//const computerScore = number(0)

//Create a const variable for numberOfGames  , value = humanScore + computerScore.
//const numberOfGames = (humanScore + computerScore)

//Create a function to generate a random integer number between 0 and 2.
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

//Create a function to getComputerChoice select R P or S.
function getComputerChoice() {
//Randomly generate a integer number between 0-2
        let choice = getRandomInt(3); 
//if 0 then return rock
        if (choice === 0) {
            return "rock"
        }
//if 1 then return paper
        else if (choice === 1) {
            return "paper"
        }
//if 2 then return scissors
        else {
            return "scissors"
        }

}
		
		
