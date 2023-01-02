function getRndmObj(): object {
	const rndm = Math.random();
	return rndm ? [rndm] : { rndm };
}
