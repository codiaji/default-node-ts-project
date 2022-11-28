interface Container {
 value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
 // Remove both 'null' and 'undefined' from the type.
 if (container.value != null) {
 console.log(container.value);
 // Now we can safely multiply 'container.value'.
 container.value *= factor;
 }
}
let container:Container={value:974/2}
multiplyValue(container,2)
console.log('container.value :>> ', container.value);
container={value:undefined}
multiplyValue(container,2)
container={value:null}
multiplyValue(container,2)