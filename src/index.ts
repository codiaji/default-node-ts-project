//
type StringNumberPair = [string, number];
// function doSomething(stringHash: StringNumberPair) {
function doSomething(stringHash: [string, number]) {
	const [inputString, hash] = stringHash;
	console.log(inputString);
	console.log(hash);
	//Tuples don't allow index past the number of elements
	// stringHash[2] = true;
}
type Either2dOr3d = [number, number, number?];
// Optional tuple elements can only come at the end, and also affect the type of length.
function getCoordinate(coord: Either2dOr3d) {
	const [x, y, z] = coord;
	console.log(`Provided coordinates had ${coord.length} dimensions`);
	console.log(`the coordinates are x=${x},y=${y} and z=${z}`);
}
// Tuples can also have rest elements, which have to be an array/tuple type
type activityClub = [...StringNumberPair, ...string[]];
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
