// Parent Class
class Shape {
	constructor(name) {
		this.name = name;
	}

	logName() {
		console.log('Shape name: ' + this.name);
	}
}

// Sub Class
class Rectangle extends Shape {
	constructor(name, width, height) {
		super(name);

		this.width = width;
		this.height = height;
	}
}

class Circle extends Shape {
	constructor(name, radius) {
		super(name);

		this.radius = radius;
	}
	logName() {
		console.log('circle name: ' + this.name);
	}
}

const rec = new Rectangle('adonis', 20, 20);
const cir = new Circle('Cir 1', 30);

console.log(rec);
// rec.logName();
cir.logName();

console.log(cir instanceof Rectangle);
console.log(cir instanceof Shape);
