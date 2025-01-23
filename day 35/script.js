let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guess');
  const guess = parseInt(guessInput.value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');
  
  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number.";
    return;
  }
  
  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess < randomNumber) {
    message.textContent = "Higher!";
  } else if (guess > randomNumber) {
    message.textContent = "Lower!";
  } else {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    resetGame();
  }
  
  guessInput.value = '';
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('attempts').textContent = attempts;
}
