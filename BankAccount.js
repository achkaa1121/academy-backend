class BankAccount{
    constructor(balance){
        this.balance = balance;
    }
	calculate(deposit, withdraw){
		return this.balance + deposit - withdraw;
	}
    }
const button = document.getElementById("updateBalance");
const func = () => {
	const balance = document.getElementById("initialBalance");
	const a = new BankAccount(Number(balance.value));
	const deposit = document.getElementById("deposit");
	const d = Number(deposit.value);
	const withdraw = document.getElementById("withdraw");
	const w = Number(withdraw.value);
	const result = document.getElementById("balance");
	const r = a.calculate(d, w)
	result.innerHTML = `Balance: ${r}`;
}
button.addEventListener("click", func);