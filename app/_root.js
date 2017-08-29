var freeGlobal = require('./_freeGlobal');

/* 
	检测变量`self`
*/
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/*
    把root当成一个global对象引用 
    如果global和self都没值就直接返回当前的this
*/
var root = freeGlobal || freeSelf ||  new Function('return this')();

module.exports = root;
