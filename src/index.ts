import { randomBytes } from 'crypto';
function getStringArray() {
	let length = Math.ceil(Math.random() * 100);
	let array = new Array(length);
	for (let index = 0; index < length; index += 1) {
		array[index] = randomBytes(20).toString('hex');
	}
	return array;
}

interface StringArray {
	[index: number]: string;
}
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
