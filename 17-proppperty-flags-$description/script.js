// [[Configurable]] - true = propperty can be deleted and this attribute can be modiefied, otherwise non

// [Enumerable] if 'true' = the propperty will be returned in a for ...in loop, otherwise no.

// [[Writeable]] - if 'true' = the value of the property can be changed, otherwise not

// [[valuable]] - the value of the property

Math.PI = 8;

console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(
	Math,
	'PI'
);
// console.log(description);

rectObj = {
	name: 'Rectangle 1',
	width: 4,
	height: 5,
};

// to change the flags back to its origina after defining it above
Object.defineProperty(rectObj, 'name', {
	configurable: false,
	writable: false,
	enumerable: true,
});

descriptor = Object.getOwnPropertyDescriptor(
	rectObj,
	'name'
);

console.log(descriptor);

rectObj.name = 'Pounce';
delete rectObj.name;

console.log(rectObj);

for (let [key, value] of Object.entries(
	rectObj
)) {
	console.log(`${key}: ${value}`);
}

console.log(
	Object.getOwnPropertyDescriptors(rectObj)
);
