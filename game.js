function getComputerChoice() {
    x = Math.floor(Math.random() *3);
    if (x) {
        if (x == 1) {
            return "paper";
        } else {
            return "scissors"
        }
    } else {
        return "rock"
    }
}

function getHumanChoice() {
    y = prompt()
    return y
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice==computerChoice) {
    return ("It's DRAW! Play again")
    } else {
    
    if ((humanChoice == "rock") && (computerChoice == "paper")){
        return("You lost! Paper covers Rock")
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        return("You won! Rock breaks Scissors")
    } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
        return ("You won! Paper covers Rock")
    } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
        return ("You lost! Scissors cut Paper")
    } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
        return ("You won! Scissors cut Paper")
    } else if ((humanChoice == "scissors") && (computerChoice == "rock")){
        return ("You lost! Rock breaks Scissors")
    } 
    }
    }


//Adding UI
let startBtn = document.querySelector("button");
let startDiv = document.querySelector(".start");
let body = document.querySelector("body");

let humanChoice;
let computerChoice;
let roundCount = 0;

startBtn.addEventListener("click", () => {
    startDiv.style.display = "none";
    const selectionDiv = document.createElement("div");
    selectionDiv.className = "selection";
    selectionDiv.style.width = "300px";
    // selectionDiv.style.marginTop = "30px";
    selectionDiv.style.display = "flex";
    selectionDiv.style.justifyContent = "space-between";
    
    const rockButton = document.createElement("button");
    rockButton.textContent = "rock";

    const paperButton = document.createElement("button");
    paperButton.textContent = "paper";

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "scissors"

    const choiceDiv = document.createElement("div");
    choiceDiv.className = "human-comp";
    choiceDiv.style.display = "flex";
    choiceDiv.style.width = "250px";
    choiceDiv.style.marginTop = "20px";
    choiceDiv.style.justifyContent = "space-between";
    choiceDiv.style.border = "3px solid brown";
    choiceDiv.style.padding = "5px";

    const youDiv = document.createElement("div");
    youDiv.className = "you";
    youDiv.textContent = "You: ";

    const compDiv = document.createElement("div");
    compDiv.className = "comp";
    compDiv.textContent = "Computer: ";

    choiceDiv.appendChild(youDiv);
    choiceDiv.appendChild(compDiv);

    const choice = [rockButton, paperButton, scissorsButton]
    choice.forEach(element => {
        selectionDiv.appendChild(element);
    });

    body.appendChild(selectionDiv);
    body.appendChild(choiceDiv);

    //Add result div
    const resultDiv = document.createElement("div");
    const roundDiv = document.createElement("div");
    roundDiv.textContent = "Round: " + roundCount;
    const yourScore = document.createElement("div");
    yourScore.textContent = "Your Score: " + humanScore;
    const compScore = document.createElement("div");
    compScore.textContent = "Computer Score: " + computerScore;
    resultDiv.style.marginTop = "25px";
    resultDiv.style.marginBottom = "10px";
    resultDiv.style.padding = "5px";
    resultDiv.style.border = "3px solid brown";
    resultDiv.style.display = "inline-block";
    resultDiv.style.width = "33%";
    resultDiv.style.fontSize = "xx-large";
    resultDiv.appendChild(roundDiv);
    resultDiv.appendChild(yourScore);
    resultDiv.appendChild(compScore);
    body.appendChild(resultDiv);
    
    const winnerDiv = document.createElement("div");
    winnerDiv.textContent = "First to reach 5 points wins";
    winnerDiv.style.marginTop = "10px";
    body.appendChild(winnerDiv);

    //Add eventlistner to selection buttons

    rockButton.addEventListener("click", function playRound() {
            computerChoice = String(getComputerChoice()).toLowerCase();
            humanChoice = rockButton.textContent.toLowerCase();

            youDiv.textContent = "You: " + humanChoice;
            compDiv.textContent = "Computer: " + computerChoice;

            if (computerChoice == humanChoice) {
                // alert("It's a Draw!")
                roundCount += 1;
                roundDiv.textContent = "Round: " + roundCount;
                yourScore.textContent = "Your Score: " + humanScore;
                compScore.textContent = "Computer Score: " + computerScore;
                
            } else {
                if (computerChoice == "paper") {
                    // alert("You lost! Paper beats Rock");
                    roundCount += 1;
                    computerScore += 1;
                    roundDiv.textContent = "Round: " + roundCount;
                    yourScore.textContent = "Your Score: " + humanScore;
                    compScore.textContent = "Computer Score: " + computerScore;
                    
                    if (roundCount >= 5) {
                        if (computerScore == 5) {
                            const gameOverDiv = document.createElement("div");
                            gameOverDiv.textContent = "You Lost!";
                            gameOverDiv.style.fontSize = "1000%";
                            gameOverDiv.style.fontWeight = "900";
                            resultDiv.style.display = "none";
                            winnerDiv.style.display = "none";
                            selectionDiv.style.display = "none";
                            choiceDiv.style.display = "none";
                            body.appendChild(gameOverDiv);
                        }
                    }

                    } else if (computerChoice == "scissors") {
                        // alert("You won! Rock beats scissors");
                        roundCount += 1;
                        humanScore += 1;
                        roundDiv.textContent = "Round: " + roundCount;
                        yourScore.textContent = "Your Score: " + humanScore;
                        compScore.textContent = "Computer Score: " + computerScore;
                        if (roundCount >= 5) {
                            if (humanScore == 5) {
                                const gameOverDiv = document.createElement("div");
                                gameOverDiv.textContent = "You Won!";
                                gameOverDiv.style.fontSize = "1000%";
                                gameOverDiv.style.fontWeight = "900";
                                resultDiv.style.display = "none";
                                winnerDiv.style.display = "none";
                                selectionDiv.style.display = "none";
                                choiceDiv.style.display = "none";
                                body.appendChild(gameOverDiv);
                            }
                        }
                    }
                }
        });

        paperButton.addEventListener("click", function playRound() {
            computerChoice = String(getComputerChoice()).toLowerCase();
            humanChoice = paperButton.textContent.toLowerCase();

            youDiv.textContent = "You: " + humanChoice;
            compDiv.textContent = "Computer: " + computerChoice;

            if (computerChoice == humanChoice) {
                // alert("It's a Draw!")
                roundCount += 1;
                roundDiv.textContent = "Round: " + roundCount;
                yourScore.textContent = "Your Score: " + humanScore;
                compScore.textContent = "Computer Score: " + computerScore;
            } else {
                if (computerChoice == "rock") {
                    // alert("You won! Paper beats Rock");
                    roundCount += 1;
                    humanScore += 1;
                    roundDiv.textContent = "Round: " + roundCount;
                    yourScore.textContent = "Your Score: " + humanScore;
                    compScore.textContent = "Computer Score: " + computerScore;
                    if (roundCount >= 5) {
                        if (humanScore == 5) {
                            const gameOverDiv = document.createElement("div");
                            gameOverDiv.textContent = "You Won!";
                            gameOverDiv.style.fontSize = "1000%";
                            gameOverDiv.style.fontWeight = "900";
                            resultDiv.style.display = "none";
                            winnerDiv.style.display = "none";
                            selectionDiv.style.display = "none";
                            choiceDiv.style.display = "none";
                            body.appendChild(gameOverDiv);
                        }
                    }
                    
                } else if (computerChoice == "scissors") {
                        // alert("You lost! scissors beat paper");
                        roundCount += 1;
                        computerScore += 1;
                        roundDiv.textContent = "Round: " + roundCount;
                        yourScore.textContent = "Your Score: " + humanScore;
                        compScore.textContent = "Computer Score: " + computerScore;
                        if (roundCount >= 5) {
                            if (computerScore == 5) {
                                const gameOverDiv = document.createElement("div");
                                gameOverDiv.textContent = "You Lost!";
                                gameOverDiv.style.fontSize = "1000%";
                                gameOverDiv.style.fontWeight = "900";
                                resultDiv.style.display = "none";
                                winnerDiv.style.display = "none";
                                selectionDiv.style.display = "none";
                                choiceDiv.style.display = "none";
                                body.appendChild(gameOverDiv);
                            }
                        }
    
                    }
                }
        });

        scissorsButton.addEventListener("click", function playRound() {
            computerChoice = String(getComputerChoice()).toLowerCase();
            humanChoice = scissorsButton.textContent.toLowerCase();

            youDiv.textContent = "You: " + humanChoice;
            compDiv.textContent = "Computer: " + computerChoice;

            if (computerChoice == humanChoice) {
                // alert("It's a Draw!")
                roundCount += 1;
                roundDiv.textContent = "Round: " + roundCount;
                yourScore.textContent = "Your Score: " + humanScore;
                compScore.textContent = "Computer Score: " + computerScore;
            } else {
                if (computerChoice == "paper") {
                    // alert("You won! Scissors beat Paper");
                    roundCount += 1;
                    humanScore += 1;
                    roundDiv.textContent = "Round: " + roundCount;
                    yourScore.textContent = "Your Score: " + humanScore;
                    compScore.textContent = "Computer Score: " + computerScore;
                    if (roundCount >= 5) {
                        if (humanScore == 5) {
                            const gameOverDiv = document.createElement("div");
                            gameOverDiv.textContent = "You Won!";
                            gameOverDiv.style.fontSize = "1000%";
                            gameOverDiv.style.fontWeight = "900";
                            resultDiv.style.display = "none";
                            winnerDiv.style.display = "none";
                            selectionDiv.style.display = "none";
                            choiceDiv.style.display = "none";
                            body.appendChild(gameOverDiv);
                        }
                    }


                } else if (computerChoice == "rock") {
                        // alert("You lost! Rock beats scissors");
                        roundCount += 1;
                        computerScore += 1;
                        roundDiv.textContent = "Round: " + roundCount;
                        yourScore.textContent = "Your Score: " + humanScore;
                        compScore.textContent = "Computer Score: " + computerScore;
                        if (roundCount >= 5) {
                            if (computerScore == 5) {
                                const gameOverDiv = document.createElement("div");
                                gameOverDiv.textContent = "You Lost!";
                                gameOverDiv.style.fontSize = "1000%";
                                gameOverDiv.style.fontWeight = "900";
                                resultDiv.style.display = "none";
                                winnerDiv.style.display = "none";
                                selectionDiv.style.display = "none";
                                choiceDiv.style.display = "none";
                                body.appendChild(gameOverDiv);
                            }
                        }
    
                    }
                }
        });

}, {once: true});


    // if (humanChoice==computerChoice) {
    // return ("It's DRAW! Play again")
    // } else {
    
    // if ((humanChoice == "rock") && (computerChoice == "paper")){
    //     return("You lost! Paper covers Rock")
    // } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
    //     return("You won! Rock breaks Scissors")
    // } else if ((humanChoice == "paper") && (computerChoice == "rock")) {
    //     return ("You won! Paper covers Rock")
    // } else if ((humanChoice == "paper") && (computerChoice == "scissors")) {
    //     return ("You lost! Scissors cut Paper")
    // } else if ((humanChoice == "scissors") && (computerChoice == "paper")) {
    //     return ("You won! Scissors cut Paper")
    // } else if ((humanChoice == "scissors") && (computerChoice == "rock")){
    //     return ("You lost! Rock breaks Scissors")
    // } 
    // }



