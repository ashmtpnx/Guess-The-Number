document.getElementById("playBtn").addEventListener("click", () => {
    
    let correctNumber = 14;
    console.log("Guess a number between 1 and 20 in 10 attempts.");
    let userGuess = prompt("Enter your guess:");

    for (let i = 1; i <= 10; i++) {
        
        if (userGuess === null) {
            alert("Game cancelled.");
            break;
        }

        if (userGuess == correctNumber) {
            alert("Congratulations! You guessed it in attempt " + i);
            break;
        } else {
            if (i < 10) {
                userGuess = prompt("Wrong guess. Attempt " + i + ". Try again:");
            }
        }

        if (i == 10 && userGuess != correctNumber) {
            alert("You are out of attempts! The correct number was " + correctNumber);
        }
    }
});
