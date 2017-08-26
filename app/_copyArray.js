/*
	source数组为被拷贝的数组
*/
function copyArray(source, array) {
  	var index = -1,
  		len = source.length;
  	//如果没有传递array参数，则初始化array
  	if(typeof array === 'undefined'){
  		array = [];
  	}
  	while(++index < len){
  		array[index] = source[index];
  	}
  	return array;
}

module.exports = copyArray;