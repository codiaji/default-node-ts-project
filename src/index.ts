function f1(a: any) {
	a.b(); // OK
}
function f2(a: unknown) {
	console.log(a);
	// uncommenting the following line will lead to a typescript error
	// a.b();
}

function safeParse(s: string): unknown {
	return JSON.parse(s);
}
// Need to be careful with 'obj'!
const obj = safeParse((() => true).toString());
