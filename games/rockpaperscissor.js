export const rockPaper = () => {
const whatAIplays = () => {
    return Math.floor(Math.random() * 3 + 1);
}
const user = Number(window.prompt("What do you play? 1 = scissor, 2 = paper, 3 = rock"));
const computer =whatAIplays();
if(user === computer){
    console.log("draw");
}else{
   switch(user === 1 && computer === 2){
        case user === 1 && computer === 3:
            window.alert("You lost")
            break;
        case user === 2 && computer === 1:
            window.alert("You lost")
            break;
        case user === 2 && computer === 3:
            window.alert("You win");
            break;
        case user === 3 && computer === 1:
            window.alert("You win");
            break;
        case user === 3 && computer === 2:
            window.alert("You lost")
            break;
        default:
            window.alert("You win");
            break;
    }
}
console.log(computer, user);
}