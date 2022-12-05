function map<Input, Output>(
	arr: Input[],
	func: (arg: Input) => Output,
): Output[] {
	return arr.map(func);
}
// Parameter 'n' is of type 'string'
// 'parsedArray' is of type 'number[]'
const parsedArray = map(['1', '2', '3'], n => parseInt(n));
console.log('parsedArray :>> ', parsedArray);
