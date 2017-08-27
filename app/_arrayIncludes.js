var baseIndexOf = require('./_baseIndexOf');
/*
	返回数组是否包含某个元素
*/
function arrayIncludes(array, value) {
  	var len = array == null ? 0 : array.length;
  	/*
  		!!0 -> false，
  		当len = 0的时候返回false,
  		转到baseIndexOf中返回索引
  	*/
  	return !!len && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;
