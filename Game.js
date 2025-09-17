// Generate random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(userGuess)) {
    message.textContent = "Please enter a valid number!";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Number must be between 1 and 100.";
    return;
  }

  if (userGuess === secretNumber) {
    message.textContent = 🎉 Correct! The number was ${secretNumber}.;
  } else if (userGuess < secretNumber) {
    message.textContent = "🔼 Too low! Try again.";
  } else {
    message.textContent = "🔽 Too high! Try again.";
  }
}