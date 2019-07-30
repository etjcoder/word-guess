
////////////////////////////////////////////////////////
///////////////////// Variables ////////////////////////
////////////////////////////////////////////////////////

var randomWord = ["applesauce", "bananas", "cherries", "dinosaurs", "eggplant", "flounder"];
var chosenWord = "";

var guessesRemaining = 15;
var lettersGuessed = [];

var blankSpaces = [];
var chosenWordArray = [];

var correctGuessesNeeded = 10;
var keyReaderOn = false;

////////////////////////////////////////////////////////
////////////// Game Setting Functions //////////////////
////////////////////////////////////////////////////////

function wordPicker() {
    randomIndex1 = Math.floor(Math.random() * 6);
    console.log(randomIndex1)
    chosenWord = randomWord[randomIndex1];
    console.log("word pulled from array: " + chosenWord);
    $("#hidden-word").text(chosenWord)

    blankSpacesFiller(chosenWord);
    letterArray(chosenWord);
    correctGuessesNeeded = chosenWord.length;
    console.log("letters remaining to guess: " + correctGuessesNeeded);
    $("#guesses-remaining").text(guessesRemaining)


    keyReaderOn = true;
    console.log("Game is ready!")
}


function blankSpacesFiller(word) {
    wordLength = word.length;
    for (i = 0; i < wordLength; i++) {
        blankSpaces.push("_ ");
        $("#letter-spaces").text(blankSpaces)
    }
    console.log("the length of the word is: " + wordLength)
    console.log("The blank space array looks like: " + blankSpaces);
}

function letterArray(word) {
    chosenWordArray = word.split("")
    console.log(chosenWordArray);
}

wordPicker();

/////////////////////////////////////////////////////////
///////////////// Game Playing Functions ////////////////
/////////////////////////////////////////////////////////

document.onkeyup = function (event) {
    if (keyReaderOn) {
        var userInput = event.key.toLowerCase();
        console.log("The user guessed: " + userInput);
        $("#letters-guessed").append(" " + userInput)

        var testedLetters = chosenWordArray.length;
        console.log(testedLetters)
        for (i = 0; i < chosenWordArray.length; i++) {

            if (userInput === chosenWordArray[i]) {
                console.log("You've guessed correctly! " + userInput + " is at index: " + i);
                blankSpaces.splice(i, 1, userInput);
                console.log(blankSpaces);
                $("#letter-spaces").text(blankSpaces)

                if(blankSpaces.indexOf("_ ") === -1){
                    console.log("GAME OVER!!")
                    console.log("GAME OVER!!")
                    console.log("GAME OVER!!")
                    console.log("GAME OVER!!")
                    keyReaderOn = false;
                    endGame();
                } else {
                    console.log("Good guess, keep playing!")
                }


            } else {
                testedLetters--;
                console.log(testedLetters)
                if (testedLetters === 0) {
                    console.log("You are incorect!")
                    guessesRemaining --;
                    $("#guesses-remaining").text(guessesRemaining)
                }
                if (guessesRemaining === 0) {
                    console.log("Game over!!");
                    console.log("Game over!!");
                    console.log("Game over!!");
                    console.log("Game over!!");
                    keyReaderOn = false;
                    endGame();
                }
            }
        }

    } else {
        console.log("Game functions havent been set yet. Please wait or refresh page!")
    }
}

////////////////////////////////////////////////////////
//////////////////  END GAME FUNCTION //////////////////
////////////////////////////////////////////////////////

function endGame() {
    chosenWord = "";
    guessesRemaining = 15;
    lettersGuessed = [];
    blankSpaces = [];
    chosenWordArray = [];
    correctGuessesNeeded = 10;
    keyReaderOn = false;

    $("#guesses-remaining").text(guessesRemaining)
    $("#letter-spaces").text(blankSpaces)
    $("#letters-guessed").text("")
    wordPicker();
}