var baseFindIndex = require('./_baseFindIndex'),
    baseIsNaN = require('./_baseIsNaN'),
    strictIndexOf = require('./_strictIndexOf');
/*
	当value !== value的时候，寻找的值为NaN，将baseIsNaN传入baseFindIndex中，
	否则只需要使用strictIndexOf(不包含NaN判断)
*/
function baseIndexOf(array, value, fromIndex) {
  	return value === value ?
  		   strictIndexOf(array, value, fromIndex):
  		   baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;
