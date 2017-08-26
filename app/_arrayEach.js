/*
	iteratee为迭代函数
*/
function arrayEach(array, iteratee){
	var index = -1,
		len = array == null ? 0 : array.length;
	while(++index < len){
		//当迭代函数返回false的时候
		if(iteratee(array[index], index, array) === false){
			break;
		}
	}
	return array;
}
module.exports = arrayEach;