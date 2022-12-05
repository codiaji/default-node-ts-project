class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}
type PersonConstructor = {
	new (name: string): { name: string };
};
function peopleConstructor(pConstructor: PersonConstructor) {
	return new pConstructor('hello');
}
console.log('peopleConstructor(Person) :>> ', peopleConstructor(Person));
