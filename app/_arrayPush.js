/*
	arrayPush的作用比较像ES5的concat，
	合并两个数组
*/
function arrayPush(array, values) {
  	var index = -1,
  		len = values.length,
  		//offset抵消
  		offset = array.length;
  	while(++index < len){
  		array[offset + index] = values[index];
  	}
  	return array;
}

module.exports = arrayPush;