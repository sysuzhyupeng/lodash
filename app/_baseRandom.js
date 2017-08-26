var nativeFloor = Math.floor,
    nativeRandom = Math.random;
function baseRandom(lower, upper){
	/*
		nativeFloor(nativeRandom() * (upper - lower + 1)) 得到[0, upper - lower]
		加上lower之后，得到[lower, upper]之间的随机数
	*/
	return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

module.exports = baseRandom;
