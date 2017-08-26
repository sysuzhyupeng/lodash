/*
	baseAggregator的特殊版本，针对于array
	@param {Function} setter The function to set `accumulator` values
	setter函数用来设置累加器accumulator的值
	@param {Function} iteratee The iteratee to transform keys.
	遍历器用来转换累加器中的key值
    @param {Object} accumulator The initial aggregated object
    初始化累加对象
*/
function arrayAggregator(array, setter, iteratee, accumulator) {
  	var index = -1,
  		len = array == null ? 0 : array.length;
  	while(++index < len){
  		var val = array[index];
  		setter(accumulator, val, iteratee(val), array);
  	}
  	return accumulator;
}

module.exports = arrayAggregator;