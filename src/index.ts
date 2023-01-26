interface NumberOrStringDictionary {
	[index: string]: number | string;
	length: number; // ok, length is a number
	name: string; // ok, name is a string
}
/* 
This code snippet will lead to order
*/
// Property 'name' of type 'string' is not assignable to 'string' index type 'number'
/* 
interface NumberDictionary {
 [index: string]: number;
 length: number; // ok
 name: string;

}
*/
// Index signature in type 'ReadonlyStringArray' only permits reading.
/* 
interface ReadonlyStringArray {
	readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
*/
