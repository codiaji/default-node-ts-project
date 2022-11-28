function example(x: string | number, y: string | boolean) {
    if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
    } else {
    console.log(x);
    console.log(y);
    }
   }
   example("Ae7","Ae7");
   example(10,"10")