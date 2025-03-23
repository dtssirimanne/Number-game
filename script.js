let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3; // Limit of attempts

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');

    if (attempts >= maxAttempts) {
        message.textContent = `Game Over! The correct number was ${randomNumber}. Refresh the page to try again.`;
        message.style.color = 'black';
        return; // Stop the game
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it in ${attempts} attempts. A new number has been set. Try again!`;
        message.style.color = 'green';
        resetGame();
    } else {
        if (attempts === maxAttempts) {
            message.textContent = `Game Over! The correct number was ${randomNumber}. Refresh the page to try again.`;
            message.style.color = 'black';
        } else {
            message.textContent = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
            message.style.color = 'red';
        }
    }
}

function resetGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 10) + 1;
}
