interface Box<Type> {
	contents: Type;
}
interface StringBox {
	contents: string;
}
let boxA: Box<string> = { contents: 'hello' };
boxA.contents;

interface Apple {
	// ....
}
// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
function setContents<Type>(box: Box<Type>, newContents: Type) {
	box.contents = newContents;
}
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
