class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
    }
}
const achkaa = new Student("Achkaa", 17);
console.log(achkaa.introduce());