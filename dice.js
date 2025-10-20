export const diceGame = () => {
const shoo1 = () => {
    return Math.floor(Math.random() * 6) + 1;
};
const shoo2 = () => {
    return Math.floor(Math.random() * 6) + 1;
};
const buusanToo = shoo1() + shoo2();
console.log(buusanToo);
if(buusanToo === 7 || buusanToo === 11){
    window.alert("Ta hojloo");
}else{
    window.alert("Ta hojigdloo");
}
}