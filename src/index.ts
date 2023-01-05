// Contextual typing with a return type of void does not force functions to not return something.
type voidFunc = () => void;
const f1: voidFunc = () => {
	return true;
};
const f2: voidFunc = () => true;
const f3: voidFunc = function () {
	return true;
};
const v1 = f1();
const v2 = f2();
const v3 = f3();
console.log({ v1, v2, v3 });

const src = [1, 2, 3];
const dst = [0];
src.forEach(el => dst.push(el));
// The oposite thing is with literal function has a void type
function print(msg: string): void {
	console.log(msg);
	// If the first below statement is uncommented, it'll lead to an error, while it won't with the two last ones
	// return 1;
	// return;
	// return undefined;
}
print('(-_-)');
// Uncommenting the following line will lead to an error
/* const f3 = function (): void {
	// @ts-expect-error
	return true;
}; */
