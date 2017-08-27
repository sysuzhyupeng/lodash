/*
	当fromRight为true的时候，从[0, fromIndex - 1]中寻找
	当fromRight为false的时候，从[fromIndex, len - 1]中寻找
*/
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  	var len = array.length,
  		//对fromIndex没做判断，则fromIndex为必填
  		index = fromIndex + (fromRight ? 1 : -1);
  	while((fromRight ? index-- : ++index < len)){
  		if(predicate(array[index], index, array)){
  			return index;
  		}
  	}
  	return -1;
}

module.exports = baseFindIndex;
