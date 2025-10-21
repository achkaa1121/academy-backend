export const guessWord = ()=> {
    const theWord = "Good";
    const length = theWord.length
    let userGuess = window.prompt("Your guess:");
    console.log("The first letter is:",theWord.charAt(0));
    console.log("The last letter is:", theWord.charAt(theWord.length-1));
    let guessedOrNot = 0;
    for(let i = 0; i < 2; i++){
        if(theWord == userGuess){
            console.log("You guessed it!");
            return {
        isWin : true,
        name : guessWord,
        metadata: {
            theWord
        }
    }
            break;
        }
        else{
            console.log("Your guess is wrong.")
        }
        userGuess = window.prompt("Guess again.");
        return {
        isWin : false,
        name : guessWord,
        metadata: {
            theWord
        }
    }
    }
}