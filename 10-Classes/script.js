class Rectangle {
	constructor(name, width, height) {
		this.name = name;
		this.width = width;
		this.height = height;
	}

	area() {
		return this.width * this.height;
	}

	perimeter() {
		return 2 * (this.width + this.height);
	}

	isSquare() {
		return this.width === this.height;
	}

	logArea() {
		console.log('Rectangle Area: ' + this.area());
	}
}

const square = new Rectangle('square', 20, 10);
// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());
// square.logArea();
// console.log(square);
// console.log(Object.getPrototypeOf(square));

// EExample from YouTuBe
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

const user1 = new User('John', 'john@gmail.com');
const user2 = new User('Kim', 'Kim@gmail.com');

console.log(user1);
console.log(user2);

// The "new" keyword
// Create a new empty object {}
// set the value of "this" to be the empty object
// calls the constructor method

// Example

// Class Declaration
class Person {
	constructor(name, year_born) {
		this.name = name;
		this.year_born = year_born;
	}

	get age() {
		return this.calcAge();
	}

	calcAge() {
		return (
			new Date().getFullYear() - this.year_born
		);
	}

	what() {
		console.log(this.name + ' is a person');
	}

	static arms() {
		// used for creating utility functions for an applicatin
		return 2;
	}
}

const me = new Person('Freddy', 1994);

console.log(
	me.name + ' was born ' + me.year_born + '!'
);
me.what();
console.log(
	me.name + ' has ' + Person.arms() + ' arms!'
); // Note to call a static function u need to call the name of the class before

// Example
class Juggler extends Person {
	// the only time you extends is when working og essay reltionships
	what() {
		console.log(this.name + ' is a juggler');
	}
}

const you = new Juggler('Alice', 1990);
me.what();
you.what();

// Class Expression
// unNamed
const Person2 = class {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
};

// Named
const Person3 = class {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
};
