/*
	遍历数组,
	看数组所有元素是否满足要求
*/
function arrayEvery(array, predicate) {
    var index = -1,
    	len = array == null ? 0 : array.length;
    while(++index < len){
    	//如果判断函数的返回值为false，则返回false
    	if(!predicate(array[index], index, array)) return false;
    }
    return true;
}

module.exports = arrayEvery;