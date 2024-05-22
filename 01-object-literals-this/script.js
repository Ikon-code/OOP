const rectangle = {
	name: 'rectangle 1',
	width: 20,
	height: 20,
	area: function () {
		return this.width * this.height;
	},
};

// console.log(rectangle.area());
// Object Literal
const book1 = {
	title: 'Book One',
	author: 'DrCode',
	year: 2020,
	getSumary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
};

console.log(book1.getSumary());
