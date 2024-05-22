// Sealing - Prevents properties from been added or remove, can still be change

// Freezing - Prevents properties from been added, remove or change

const rectObj = {
	name: 'Rectangle 1',
	width: 10,
	height: 15,
};

// we seal our object
Object.seal(rectObj);

let descriptors =
	Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors);

// properties  can't be added or deleted but can be chnaged
rectObj.color = 'red';
delete rectObj.width;
// console.log(rectObj);

const circle = {
	name: 'Circle 1',
	radius: 30,
};

Object.freeze(circle);

let descriptors1 =
	Object.getOwnPropertyDescriptors(circle);
console.log(descriptors1);

circle.color = 'red';
delete circle.name;
circle.name = 'Pounce';
// console.log(circle);

console.log(
	'rectObjec is sealed?',
	Object.isSealed(rectObj)
);
console.log(
	'rectObjec is frozen?',
	Object.isFrozen(rectObj)
);
console.log(
	'cicle is sealed?',
	Object.isSealed(circle)
);
console.log(
	'circle is frozen?',
	Object.isFrozen(circle)
);
