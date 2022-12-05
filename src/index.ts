function firstElement<Type>(arr: Type[]): Type | undefined {
	return arr[0];
}
console.log('firstElement([]) :>> ', firstElement([]));
console.log('firstElement([1]) :>> ', firstElement([1]));
console.log('firstElement(["a","b"]) :>> ', firstElement(['a', 'b']));
