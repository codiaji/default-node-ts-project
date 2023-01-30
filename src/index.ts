/* 
Generic classes are only generic over their instance side rather than their static side
*/
class GenericNumber<NumType> {
	zeroValue: NumType;
	add: (x: NumType, y: NumType) => NumType;
	log: () => void;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
	return x + y;
};
myGenericNumber.log = function () {
	console.log(this);
};
myGenericNumber.log();
