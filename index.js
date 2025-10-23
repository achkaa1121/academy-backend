let num = 0;
const counter = document.getElementById("counter");
const nemehBut = document.getElementById("buttonNemeh");
const hasahBut = document.getElementById("buttonHasah");
nemehBut.innerText = "Nemeh";
hasahBut.innerText = "Hasah";
const plus = () => {
        num++;
    counter.innerText = num;
}
const minus = () => {
        num--;
    counter.innerText = num;
}
nemehBut.addEventListener("click",plus);
hasahBut.addEventListener("click",minus);