type ReadOnlyStringNumberPair = readonly [string, number];
// function doSomething(pair: readonly [string, number]) {
function doSomething(pair: ReadOnlyStringNumberPair) {
	// Uncommenting the bellow code snippet will lead to error
	// pair[0] = 'hello!';
	const [name, age] = pair;
	console.log('name :>> ', name);
	console.log('age :>> ', age);
}
// array literals with const assertions will be inferred with readonly tuple types
let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
	return Math.sqrt(x ** 2 + y ** 2);
}
// Uncommenting the bellow code will introduce an error
// distanceFromOrigin(point);
