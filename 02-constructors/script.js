// Constructors = special methods for defining the properties and methods of object

// Example

function Car(make, model, year, color) {
	(this.make = make),
		(this.model = model),
		(this.year = year),
		(this.color = color);
	this.drive = () => {
		console.log(`You drive a ${this.model}`);
	};
}

const Car1 = new Car(
	'Ford',
	'Mustang',
	2009,
	'blue'
);

const Car2 = new Car(
	'Chevrolet',
	'Camaro',
	2010,
	' green'
);

const Car3 = new Car(
	'Peageot',
	'506',
	2013,
	'black'
);

// console.log(Car1.make);
// console.log(Car1.model);
// console.log(Car1.year);
// console.log(Car1.color);

// console.log(Car2.make);
// console.log(Car2.model);
// console.log(Car2.year);
// console.log(Car2.color);

// console.log(Car3.make);
// console.log(Car3.model);
// console.log(Car3.year);
// console.log(Car3.color);

Car1.drive();
Car2.drive();
Car3.drive();

// Example
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	};
}

// Instantiate
const book1 = new Book(
	'Jungle Justice',
	'Anthony Doe',
	2024
);

const book2 = new Book(
	'Mud Justice',
	'corny Doe',
	2024
);

console.log(book2);
