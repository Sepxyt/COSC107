// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to the input field and the message div
const guessField = document.getElementById('guessField');
const message = document.getElementById('message');

// Keep track of the number of guesses
let guessCount = 0;

function checkGuess() {
  // Get the player's guess
  const userGuess = parseInt(guessField.value);
  
  // Increment the guess count
  guessCount++;
  
  // Check if the guess is correct
  if (userGuess === randomNumber) {
    // If the guess is correct, display a congratulatory message
    message.textContent = `Congratulations! You guessed the number in ${guessCount} guesses!`;
    message.style.color = 'green';
    guessField.disabled = true; // Disable the input field
  } else if (userGuess < randomNumber) {
    // If the guess is too low, provide a hint to go higher
    message.textContent = 'Try a higher number!';
    message.style.color = 'red';
  } else {
    // If the guess is too high, provide a hint to go lower
    message.textContent = 'Try a lower number!';
    message.style.color = 'red';
  }
}
