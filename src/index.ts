// strictNullChecks on
// we can use narrowing to check for values that might be null :
function doSomething(x: string | null) {
    if (x === null) {
    // do nothing
    } else {
    console.log("Hello, " + x.toUpperCase());
    }
}
doSomething(null);
// The below line will lead to an error once uncommented
//    doSomething(undefined);