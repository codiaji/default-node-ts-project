type DescribableFunction = {
	description: string;
	(someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
	console.log(fn.description + ' returned ' + fn(6));
}
function isOdd(number: number) {
	return number % 2 === 0;
}
isOdd.description = 'is odd Function';
doSomething(isOdd);
