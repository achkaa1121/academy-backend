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
const height = document.getElementById("Height");
const width = document.getElementById("Width");
const result = document.getElementById("resultRectangle");
const calculate = () => {
	const h = Number(height.value);
	const w = Number(width.value);
	const a = new Rectangle(h, w);
	const area = a.area();
	const perimeter = a.perimeter();
	result.innerHTML = `Area: ${area}, Perimeter: ${perimeter}`;
};
const button = document.getElementById("calculate");
button.addEventListener("click", calculate);