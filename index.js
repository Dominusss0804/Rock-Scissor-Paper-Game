const choices = ["rock", "paper", "scissor"];

// Function for AI choice
function getAiChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

// Determine the winner
function determineWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return "DRAW!";
    } else if (
        (userChoice === "rock" && aiChoice === "scissor") ||
        (userChoice === "paper" && aiChoice === "rock") ||
        (userChoice === "scissor" && aiChoice === "paper")
    ) {
        return "YOU WIN!";
    } else {
        return "YOU LOSE!";
    }
}

// For user choice
function youChoice(userChoice) {
    const aiChoice = getAiChoice();
    const result = determineWinner(userChoice, aiChoice);

    // Update the UI
    document.querySelector("h1").textContent = result;
    document.getElementById("you").textContent = `You -> ${userChoice.toUpperCase()}`;
    document.getElementById("ai").textContent = `AI -> ${aiChoice.toUpperCase()}`;
}

// Add event listeners to buttons
document.querySelector('.rock').addEventListener('click', () => youChoice('rock'));
document.querySelector('.paper').addEventListener('click', () => youChoice('paper'));
document.querySelector('.scissor').addEventListener('click', () => youChoice('scissor'));
