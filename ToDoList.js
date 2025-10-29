class Tasks{
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }
    removeTask(task){
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }
    showTasks(){
        return this.tasks;
    }
}
const addTask = document.getElementById("addTask");
const removeTask = document.getElementById("removeTask");
const showTasks = document.getElementById("showTask");
let task = document.getElementById("task");
const myTodo = new Tasks();
const addTaskFunc = () => {
	return myTodo.addTask(task.value);
}
const removeTaskFunc = () => {
	return myTodo.removeTask(task.value);
}
const showTaskFunc = () => {
	const taskArray = myTodo.showTasks();
	const result = document.getElementById("tasks")
	let resulFinal = taskArray.join(", ");
	result.innerHTML = `${resulFinal}`;
}
addTask.addEventListener("click", addTaskFunc);
removeTask.addEventListener("click", removeTaskFunc);
showTask.addEventListener("click", showTaskFunc);