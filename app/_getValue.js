/*
	增加了对object的判断，
	如果object存在则返回object[key]
*/
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;