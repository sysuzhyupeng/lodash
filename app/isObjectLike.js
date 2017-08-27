/*
 *	_.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLi
*/
function isObjectLike(value){
	//返回typeof为object的对象，包括数组对象
	return value != null && typeof value == 'object';
}

module.exports = isObjectLike;