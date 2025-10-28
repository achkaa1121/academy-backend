export const guessNum = () => {
    const theNum = () => {
        return Math.floor(Math.random() * 10) + 1;
    }
    let userValue = window.prompt("Your guess:");
    const number = theNum();
    console.log(number);
    for(var i = 0; i < 2; i++){
        if(number == userValue){
            window.alert("You guessed it!");
            break;
        }else if(number < userValue){
            userValue = window.prompt("Guess again. The number is smaller.")
        }else{
            userValue = window.prompt("Guess again. The number is bigger.");
        }
    }
}