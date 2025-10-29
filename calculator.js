class Calculator{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(){
        return this.a + this.b;
    }
    subtract(){
        return this.a - this.b;
    }
    multiply(){
        return this.a * this.b;
    }
    divide(){
        if(this.b === 0){
            console.log("Cannot divide by zero!");
        }
        else{
            return this.a / this.b;
        }
    }
}
const a = document.getElementById("a");
const b = document.getElementById("b");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const addFunc = () => {
	const calc1 = new Calculator(Number(a.value), Number(b.value));
	let result = calc1.add();
	let finalResult = document.getElementById("result");
	finalResult.innerHTML = `${result}`
}
const subtractFunc =  () => {
	const calc1 = new Calculator(Number(a.value), Number(b.value));
	let result = calc1.subtract();
	let finalResult = document.getElementById("result");
	finalResult.innerHTML = `${result}`
}
const multiplyFunc =  () => {
	const calc1 = new Calculator(Number(a.value), Number(b.value));
	let result = calc1.multiply();
	let finalResult = document.getElementById("result");
	finalResult.innerHTML = `${result}`
}
const divideFunc =  () => {
	const calc1 = new Calculator(Number(a.value), Number(b.value));
	let result = calc1.divide();
	let finalResult = document.getElementById("result");
	finalResult.innerHTML = `${result}`
}
add.addEventListener("click", addFunc);
subtract.addEventListener("click", subtractFunc);
multiply.addEventListener("click", multiplyFunc);
divide.addEventListener("click", divideFunc);