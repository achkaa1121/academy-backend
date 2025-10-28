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
const myTodo = new Tasks();
myTodo.addTask("Go home.")
myTodo.removeTask("Go home.")
console.log(myTodo.showTasks());