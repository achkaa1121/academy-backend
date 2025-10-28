import { dice } from "./games/dice.js";
import { rockPaper } from "./games/rockpaperscissor.js";
import { guessNum } from "./games/guessthenumber.js";
import { guessWord } from "./games/guesstheword.js";
const dicegame = document.getElementById("dice");
const leave = document.getElementById("leave");
const rockpaper = document.getElementById("rockPaper");
const num = document.getElementById("guessNum");
const word = document.getElementById("guessWord");
const resulArray = [];
const leaving = () => {
    
}
dicegame.addEventListener("click",dice);
rockpaper.addEventListener("click",rockPaper);
leave.addEventListener("click",leaving);
num.addEventListener("click",guessNum);
word.addEventListener("click",guessWord);