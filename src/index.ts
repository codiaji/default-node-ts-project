// The below code snippet will lead to error
/* 
interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ['AE10', 'EA7'];
myArray[1] = 'ea7'; 
*/
interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ['AE10', 'EA7'];
myArray = ['ea7', 'ae10'];
// The below code snippet will lead to error
// myArray.push('am');
// The below code snippet will lead to error
// console.log('[...myArray,"am"] :>> ', [...myArray, 'am']);
// The below code snippet will lead to error
// Array.from(myArray);
