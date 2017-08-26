/*
	接收一个函数iteratee
	@param {*} [accumulator] The initial value. 初始值
	@param {boolean} [initAccum] Specify using the first element of `array` as
    the initial value.
    initAccum用来标识是否把数组第一个元素作为初始值
*/
function arrayReduce(array, iteratee, accumulator, initAccum) {
	var index = -1,
		len = array == null ? 0 : array.length;
	if(initAccum && len){
		//accumulator = array[0], index++
		accumulator = array[++index];
	}
	while(++index < len){
		//iteratee函数不断调用，将调用结果变成下一次的参数
		accumulator = iteratee(accumulator, array[index], index, array);
	}
	return accumulator;
}

module.exports = arrayReduce;