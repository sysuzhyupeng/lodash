var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
/*
	返回一个对象上是否存在该属性(不包括原型链)
	当object不为null的时候使用hasOwnProperty方法检测
*/
function baseHas(object, key) {
	return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;