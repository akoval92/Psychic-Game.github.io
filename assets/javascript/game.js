

        // <p id="guesserText" ></p>
        // <p id="machineText" ></p>
        // <p id="winText" ></p>
        // <p id="loseText" ></p>
        


var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;

var guesserText = document.getElementById("guesserText");
var machineText = document.getElementById("machineChoice");
var winText = document.getElementById("winText");
var loseText = document.getElementById("loseText");
// var attemptText = document.getElementById("ties-text");


document.onkeyup = function(event) {
        console.log()
        
    var userGuess = event.key;
    
        var machineChoice = letterBank[Math.floor(Math.random() * letterBank.length)]; }



        if ((userGuess === machineChoice)) {

    wins++;

        }

        else {
            looses++

        }



        guesserText.textContent = document.getElementsByClassName("letterList") + userGuess;
        winText.textContent = document.getElementsByClassName("userWin") + winText;
        loseText.textContent = document.getElementsByClassName("userLose") + loseText;









        // ******************************working code************************************


        // To console log "Your guesses so far" line**************************************


        
    <script type="text/javascript" >
    
    var userGuess = document.getElementById("guesserText");
    
    document.onkeyup = function(event) {
        console.log(event);
            userGuess.textContent = event.key;
    };
    
    
    </script>   