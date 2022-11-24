// Type Assertions
let myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement
myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas")
// type assertions convert to a more specific or less specific version of a type. This rule prevents "impossible" coercions like:
// const x = "hello" as number;
// A workaround of the above rule is as below
// const a = (expr as any) as T;
