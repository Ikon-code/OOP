function Car(make, model, year, color) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
}

const car1 = new Car(
	'Cheverolet',
	'Mustang',
	2020,
	'red'
);
const car2 = new Car(
	'Honda',
	'wagon',
	2026,
	'blue'
);

console.log(car1.make, car1.year);
console.log(car2.make, car2.model);
console.log(car1['make']);

// to add or change a new propertiy
car2.brand = 'Meccedess';
car2.price = () => 4500;

// To delete property
delete car2.price;

// To check for property
console.log(car1.hasOwnProperty('brand'));
console.log(car2.hasOwnProperty('brand'));

// Get keys
console.log(Object.keys(car2));

// Get Values
console.log(Object.values(car1));

// Get Entries
console.log(Object.entries(car2));

for (let [key, value] of Object.entries(car2)) {
	if (typeof value !== 'function') {
		console.log(`${key} - ${value}`);
	}
}

console.log(car2);
