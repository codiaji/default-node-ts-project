// The below three cases show misuse of function overloads
// case 1
// The function signature doesn't allow the parameter to be optional, so function signature doesn't suit function implementation
function fn(x: string): void;
function fn() {
	// ...
}
// Expected to be able to call with zero arguments
fn();
// case 2
function f(x: boolean): void;
// Argument type isn't right
function f(x: string): void;
function f(x: boolean) {}
// case 3
function fun(x: string): string;
// Return type isn't right
function fun(x: number): boolean;
function fun(x: string | number) {
	return 'oops';
}
