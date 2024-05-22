function Shape(name) {
	this.name = name;
}

Shape.prototype.logName = function () {
	console.log(`Shape Name is ${this.name}`);
};

function Rectangle(name, height, width) {
	Shape.call(this, name);
	this.height = height;
	this.width = width;
}

// Inherit Shape Prototype
Rectangle.prototype = Object.create(
	Shape.prototype
);

function Circle(name, radius) {
	Shape.call(this, name);

	this.radius = radius;
}

const rec = new Rectangle('Rectangle 1', 20, 20);
const cir = new Circle('Circle 1', 30);

// Set prototype constructor
Rectangle.prototype.constructor = Rectangle;

console.log(rec);
// console.log(cir);

rec.logName();

console.log(rec.constructor);
