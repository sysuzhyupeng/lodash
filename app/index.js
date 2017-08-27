var arrayEach = require('./_arrayEach'),
	apply = require('./_apply'),
	arrayAggregator = require('./_arrayAggregator'),
	addSetEntry = require('./_addSetEntry'),
	addMapEntry = require('./_addMapEntry')
	arrayEachRight = require('./_arrayEachRight'),
	arrayEvery = require('./_arrayEvery')
	arrayFilter = require('./_arrayFilter')
	arrayMap = require('./_arrayMap'),
	arrayPush = require('./_arrayPush'),
	arrayReduce = require('./_arrayReduce'),
	arraySample = require('./_arraySample'),
	arraySome = require('./_arraySome'),
	arrayIncludes = require('./_arrayIncludes'),
	arrayIncludesWith = require('./_arrayIncludesWith'),
	asciiSize = require('./_asciiSize'),
	asciiToArray = require('./_asciiToArray'),
	asciiWords = require('./_asciiWords'),
	copyArray = require('./_copyArray'),
	baseRandom = require('./_baseRandom'),
	baseFindIndex = require('./_baseFindIndex'),
	baseIsNaN = require('./_baseIsNaN'),
	baseLt = require('./_baseLt'),
	baseHas = require('./_baseHas'),
	baseClamp = require('./_baseClamp'),
	baseConformsTo = require('./_baseConformsTo'),
	strictIndexOf = require('./_strictIndexOf'),
	baseIndexOf = require('./_baseIndexOf'),
	baseProperty = require('./_baseProperty'),
	getValue = require('./_getValue'),
	eq = require('./eq'),
	isArray = require('./isArray'),
	isObject = require('./isObject'),
	isNull = require('./isNull'),
	isObjectLike = require('./isObjectLike'),
	reverse = require('./reverse');


// var a = arrayIncludesWith([1, 2, 3], 3, function(val1, val2){
// 	return val1 + val2 == 3;
// });
// console.log('a', a);
console.log(baseClamp(49, 51, 100))