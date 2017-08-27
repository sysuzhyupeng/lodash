/*
	只有NaN不等于自身
*/
function baseIsNaN(value){
	return value !== value;
}
module.exports = baseIsNaN;