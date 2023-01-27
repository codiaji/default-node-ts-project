// The bellow line is equivalent to the following one
// function doStuff(values: readonly string[]) {
function doStuff(values: ReadonlyArray<string>) {
	// We can read from 'values'...
	const copy = values.slice();
	console.log(`The first value is ${values[0]}`);
	// ...but we can't mutate 'values' as in the commented below code snippet
	//  values.push("hello!");
}
const roArray: ReadonlyArray<string> = ['red', 'green', 'blue'];
// assignability isn't bidirectional between regular Array s and ReadonlyArray
let x: readonly string[] = [];
let y: string[] = [];
x = y;
y = x;
