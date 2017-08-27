/*
	比arrayIncludes更进一步，传入一个comparator函数,
	当array中的value和传入的value满足这个comparator时返回true
*/
function arrayIncludesWith(array, value, comparator) {
  	var index = -1,
  		len = array == null ? 0 : array.length;
  	while(++index < len){
  		if(comparator(value, array[index])){
  			return true;
  		}
  	}
  	return false;
}

module.exports = arrayIncludesWith;
