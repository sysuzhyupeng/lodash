/*
	从数组尾部向头部遍历
*/
function arrayEachRight(array, iteratee) {
  	var len = array == null ? 0 : array.length;
  	//当len不为0
    while (len--) {
        if (iteratee(array[len], len, array) === false) {
        	break;
    	}
    }
    return array;
}

module.exports = arrayEachRight;
