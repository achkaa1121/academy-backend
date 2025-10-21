export const dice = () => {
const shoo1 = () => {
    return Math.floor(Math.random() * 6) + 1;
};
const shoo2 = () => {
    return Math.floor(Math.random() * 6) + 1;
};
const buusanToo = shoo1() + shoo2();
console.log(buusanToo);
const win = "Ta hojloo. Buusan too: ";
const lose = "Ta hojigdloo. Buusan too: ";
if(buusanToo === 7 || buusanToo === 11){
    window.alert(win.concat(buusanToo.toString()));
    return {
        isWin : true,
        name : dice,
        metadata: {
            shoo1,
            shoo2
        }
    }
}else{
    window.alert(lose.concat(buusanToo.toString()));
    return {
        isWin : false,
        name : dice,
        metadata: {
            shoo1,
            shoo2
        }
    }
}
}