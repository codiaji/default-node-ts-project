// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number, z?:number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
   }
   printCoord({ x: 3, y: 7 });
   printCoord({ x: 3, y: 7,z:11 });