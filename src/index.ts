let x: "hello" = "hello";
// OK
x = "hello";
// The below code snippet will lead to error once uncommented
// x = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
// The below code snippet will lead to error once uncommented
//    printText("G'day, mate", "centre");

function compare(a: number, b: number): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log('compare(1,9) :>> ', compare(1,9));

interface Options {
    width: number;
   }
   function configure(x: Options | "auto") {
    // ...
   }
   configure({ width: 100 });
   configure("auto");
   // The below code snippet will lead to error once uncommented
//    configure("automatic");