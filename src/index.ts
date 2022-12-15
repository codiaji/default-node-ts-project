// The below commented code snippet show a case when to not use type parameters (i.e. when type parameters aren't relating the types of multiple value), and uncommented one, show what we should do instead
/* 
function greet<Str extends string>(s: Str) {
 console.log("Hello, " + s);
}
*/
function greet(s: string) {
	console.log('Hello, ' + s);
}
