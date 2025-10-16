const whatAIplays = () => {
    return Math.floor(Math.random() * 3 + 1);
}
const converter = (which) => {
    if(which === 1){
        return "Scissor";
    }else if(which === 2){
        return "Paper";
    }else{"Rock"}
}
const person = {
    which = converter(user);
}
const ai = {
    which = converter(computer);
}
console.log(person.which)
const user = Number(window.prompt("What do you play? 1 = scissor, 2 = paper, 3 = rock"));
const computer = whatAIplays();
console.log(computer,'Computer:');
console.log(user,'User:')
if(user === computer){
    console.log("draw");
}else{
   switch(user === 1 && computer === 2){
        case user === 1 && computer === 3:
            console.log("You lost");
            break;
        case user === 2 && computer === 1:
            console.log("You lost");
            break;
        case user === 2 && computer === 3:
            console.log("You win");
            break;
        case user === 3 && computer === 1:
            console.log("You win");
            break;
        case user === 3 && computer === 2:
            console.log("You lost");
            break;
        default:
            console.log("You win");
            break;
    }


}

