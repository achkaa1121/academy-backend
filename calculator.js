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
const calc1 = new Calculator(6, 4);
console.log(calc1.divide());