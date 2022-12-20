// Don't write code like the below one
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
	return x.length;
}

len(''); // OK
len([0]); // OK
len(Math.random() > 0.5 ? 'hello' : [0]);
// Write this alternative
/* function len(x: any[] | string) {
	return x.length;
   } */
