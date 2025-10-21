import { dice } from "./games/dice.js";
import { rockPaper } from "./games/rockpaperscissor.js";
import { guessNum } from "./games/guessthenumber.js";
import { guessWord } from "./games/guesstheword.js";
let currentGame = Number(window.prompt("Ymar togloom togloh ve? RockPaper bol 1, dice bol 2, ug taah bol 3 , toog bol 4"));
const resulArray = [];
while(true){
    switch(currentGame){
        case 2:
            const gameResult = dice()
            resulArray.push(gameResult)
            break;
        case 3:
            guessWord()
            break;
        case 4:
            guessNum()
            break;
        case 1 :
            rockPaper()
            break;
    }
    let wth = Number(window.prompt("Keep playing = 1, Stop playing 0, Play other games = 2"));
    if(wth === 0){
        break;
    }else if(wth === 2){
        currentGame = Number(window.prompt("Ymar togloom togloh ve? RockPaper bol 1, dice bol 2, ug taah bol 3 , toog bol 4"));
    }
    console.log(wth)
}