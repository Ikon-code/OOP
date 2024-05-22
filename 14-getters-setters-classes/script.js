class Person {
	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get firstName() {
		return this.capitalizeFirstLetter(
			this._firstName
		);
	}

	set firstName(value) {
		this._firstName =
			this.capitalizeFirstLetter(value);
	}

	//
	get lastName() {
		return this.capitalizeFirstLetter(
			this._lastName
		);
	}

	set lastName(value) {
		this._lastName =
			this.capitalizeFirstLetter(value);
	}

	get fullName() {
		return `My name is ${this._firstName} ${this._lastName}`;
	}

	capitalizeFirstLetter(value) {
		return (
			value.charAt(0).toUpperCase() +
			value.slice(1)
		);
	}
}

const person1 = new Person('joe', 'kim');
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

person1._firstName = 'Bobb';
person1.lastName = 'kimnana';

console.log(person1);
