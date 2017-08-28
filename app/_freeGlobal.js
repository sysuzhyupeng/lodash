/**
	Detect free variable `global` from Node.js.
    检测node.js的global变量
*/
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;