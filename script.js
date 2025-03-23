let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it in ${attempts} attempts. A new number has been set. Try again!`;
        message.style.color = 'green';
        attempts = 0; // Reset attempts
        randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a new random number
    } else {
        message.textContent = userGuess > randomNumber ? 'Too high! Try again.' : 'Too low! Try again.';
        message.style.color = 'red';
    }
}
