/*
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other){
	//前一个判断用来判断是否类型和值相等，后一个判断用来验证是否是NaN
	return value === other || (value !== value && other !== other);
}

module.exports = eq;