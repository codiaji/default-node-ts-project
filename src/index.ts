type vFT = () => void;
type Fish = { name: string; swim: vFT };
type Bird = { name: string; fly: vFT };
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined;
}
function getSmallPet() {
	if (Math.random() > 0.5) {
		return { name: 'bird', fly: () => {} } as Bird;
	} else {
		return { name: 'fish', swim: () => {} } as Fish;
	}
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
if (isFish(pet)) {
	pet.swim();
} else {
	pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
	if (pet.name === 'sharkey') return false;
	return isFish(pet);
});
