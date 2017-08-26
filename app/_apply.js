function apply(func, thisArg, args){
	switch(args.length){
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	/*
		超过三个参数
	*/
	return func.apply(thisArg, args);
}
module.exports = apply;