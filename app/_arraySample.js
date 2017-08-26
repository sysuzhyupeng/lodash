var baseRandom = require('./_baseRandom');

/*
 	数组随机取样
 */
function arraySample(array) {
    var len = array.length;
    return len ? array[baseRandom(0, len - 1)] : undefined;
}

module.exports = arraySample;