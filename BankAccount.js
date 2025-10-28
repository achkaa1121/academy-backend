class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        return this.balance + amount;
    }
    withdraw(amount){
        if(this.balance >= amount){
            return this.balance - amount;
        }else{
            window.alert("Not enough balance!");
        }
    }
    getbalance(){
        return this.balance;
    }
}
const me = new BankAccount("Me", 50000);
console.log(me.getbalance());