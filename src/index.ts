type vFT = () => void;
type voidFunctionType = () => {};
type Fish = { swim: vFT };
type Bird = { fly: vFT };
type Human = { swim?: vFT; fly?: vFT };
function move(animal: Fish | Bird | Human) {
	if ('swim' in animal) {
		return animal;
	} else {
		return animal;
	}
}
console.log('move({ fly: () => {} }) :>> ', move({ fly: () => {} }));
console.log('move({ swim: () => {} }) :>> ', move({ swim: () => {} }));
