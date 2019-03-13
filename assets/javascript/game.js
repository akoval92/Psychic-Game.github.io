var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
var userGuesses = [];
var guessAmount = 9
var wins = 0;
var losses = 0;

var machineChoice = letterBank[Math.floor(Math.random() * letterBank.length)];
console.log("computer guess: ", machineChoice);

document.onkeyup = function(event) {  
    var userGuess = event.key;
    // flagging
    var isItAlphabet = false;

    for(var i = 0; i < letterBank.length; i++) {
        if (userGuess === letterBank[i]) {
            isItAlphabet = true;
        }
    }

    if (isItAlphabet === true) {
        userGuesses.push(userGuess);
        // console.log(userGuesses);
        guessAmount--;

        document.getElementById("guesserText").textContent = userGuesses;
        document.getElementById("guessLeft").textContent = guessAmount;

        if (userGuess === machineChoice) {
            wins++;
            reset();
            document.getElementById("winText").textContent = wins;
        } else if (guessAmount === 0){
         
            losses++;
            reset();
            document.getElementById("loseText").textContent = losses;
        }
    } else {
        alert("Please press a-z")
    }
};

var reset = function() {
    guessAmount = 9;
    userGuesses = [];
    machineChoice = letterBank[Math.floor(Math.random() * letterBank.length)];
    console.log("changed?", machineChoice);
    document.getElementById("guesserText").textContent = userGuesses;
    document.getElementById("guessLeft").textContent = guessAmount;
}