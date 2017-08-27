var arrayProto = Array.prototype;
var nativeReverse = arrayProto.reverse;
/*
	当array不为null的时候，使用数组原生的reverse
*/
function reverse(array) {
    return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;