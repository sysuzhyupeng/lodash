var baseProperty = require('./_baseProperty');

/**
 	获取一个字符串的ASCII长度，
 	调用时直接asciiSize(str)，
 	因为baseProperty返回了一个函数
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;