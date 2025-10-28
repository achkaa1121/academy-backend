class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
    perimeter(){
        return 2 * (this.height + this.width);
    }
}
const a = new Rectangle(10, 2);
console.log(a.perimeter());