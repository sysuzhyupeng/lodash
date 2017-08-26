function arrayMap(array, iteratee) {
  	var index = -1,
  		len = array == null ? 0 : array.length,
  		result = [];
  	while(++index < len){
  		var val = iteratee(array[index], index, array);
  		result.push(val);
  	}
  	return result;
}

module.exports = arrayMap;