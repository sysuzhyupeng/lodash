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
	copyArray = require('./_copyArray'),
	baseRandom = require('./_baseRandom'),
	baseFindIndex = require('./_baseFindIndex'),
	eq = require('./eq'),
	isArray = require('./isArray');

var a = baseFindIndex([1, 2, 3], function(v, k){
	return v == 3;
}, 0);
console.log('a', a);
