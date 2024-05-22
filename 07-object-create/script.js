const person = {
	calcAge() {
		return (
			new Date().getFullYear() - this.birthYear
		);
	},
	greet() {
		return ' Have a nice day ahead';
	},

	init(name, birthYear, gender) {
		this.name = name;
		this.birthYear = birthYear;
		this.gender = gender;
	},
};
// inheritance
const John = Object.create(person);

John.name = '  John';
John.birthYear = '1994';
John.gender = 'Male';

// console.log(John);
// console.log(John.calcAge());

// EXAMPLE 2

let Matha = Object.create(person, {
	name: { value: 'Matha' },
	birthYear: { value: 1994 },
	gender: { value: 'Female' },
});

// console.log(Matha);

// EXAMPLE Using the init method by callin it
const Mark = Object.create(person);
Mark.init('Mark', 1994, 'Male');

// console.log(Mark);

// EXAMPLE 4
const RectanglePrototype = {
	area: function () {
		return this.width * this.height;
	},
	perimeter: function () {
		return 2 * (this.width + this.height);
	},
	isSquare: function () {
		return this.width == this.height;
	},
};
function createRectangle(height, width) {
	return Object.create(RectanglePrototype, {
		height: {
			value: height,
		},
		width: {
			value: width,
		},
	});
}

const rec = createRectangle(10, 20);
console.log(rec);
console.log(rec.perimeter());
