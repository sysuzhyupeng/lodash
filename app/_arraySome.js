/*
	验证数组元素是否有一个满足条件
*/
function arraySome(array, predicate) {
	var index = -1,
	    len = array == null ? 0 : array.length;

	while (++index < len) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	}
	return false;
}

module.exports = arraySome;