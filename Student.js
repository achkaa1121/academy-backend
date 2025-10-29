class Student {
    constructor(name, age){
    }
}
const namee = document.getElementById("name");
const age = document.getElementById("age");
const result = document.getElementById("resultStudent");
const student = new Student(namee.value, age.value);
const button = document.getElementById("introduce");
button.addEventListener("click", () => {
	result.innerHTML = `Hi, I'm ${namee.value} and I'm ${age.value} years old.`;
});