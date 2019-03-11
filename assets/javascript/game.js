





var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;

var guesserText = document.getElementById("guesserchoice-text");
var machineText = document.getElementById("machinechoice-text");
var winText = document.getElementById("win-text");
var loseText = document.getElementById("lose-text");
// var attemptText = document.getElementById("ties-text");


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
        var machineGuess = letterBank[Math.floor(Math.random() * letterBank.length)]; }