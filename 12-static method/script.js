class Rectangle {
	constructor(name, width, height) {
		this.name = name;
		this.height = height;
		this.width = width;
	}

	area() {
		return this.width * this.height;
	}

	static getClass() {
		return 'dRectangle';
	}
}

const rec = new Rectangle('rec 1', 20, 20);

console.log(rec);

// this syntax will not work on ststic method
// console.log(rec.getClass());

// this syntax will go for static method
console.log(Rectangle.getClass());
