export const guessNum = () => {
    const theNum = () => {
        return Math.floor(Math.random() * 10) + 1;
    }
    let userValue = window.prompt("Your guess:");
    const number = theNum();
    console.log(number);
    for(let i = 0; i < 2; i++){
        if(number == userValue){
            console.log("You guessed it!")
            break;
        }else if(number < userValue){
            console.log("Your guess is bigger.");
        }else{
            console.log("Your guess is smaller.");
        }
        userValue = window.prompt("Guess again.");
    }
}