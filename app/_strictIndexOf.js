/*
    strict的由来是这里不包含NaN判断，
	在[fromIndex, len - 1]中寻找和value相等的元素，
	这里fromIndex一定要传，因为没有加上fromIndex不传的情况，

*/
function strictIndexOf(array, value, fromIndex){
  	var index = fromIndex - 1,
  		len = array.length;
  	while(++index < len){
  		if(array[index] === value){
  			return index;
  		}
  	}
  	return -1;
}

module.exports = strictIndexOf;
