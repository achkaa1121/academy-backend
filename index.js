const first = window.prompt("Enter first number:");
const second = window.prompt("Enter second number:");
const third = window.prompt("Enter third number:");
if(first < second){
    if(second < third){
        console.log(third);
    }else{
        console.log(second);
    }
}else{
    if(first < third){
        console.log(third);
    }else{
        console.log(first);
    }
}