/*
    返回一个for-in处理函数
*/
function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc){
        var index = -1,
            //Object和new Object效果相同,开启v8加速
            iterable = Object(object),
            //获得一个属性数组
            props = keysFunc(object),
            len = props.length;
        //不改变len的情况下，循环len - 1次
        while(len--){
            var key = props[fromRight ? len : ++index];
            if(iteratee(iterable[key], key, iterable) === false){
                break;
            }
        }
        return object;
    }
}

module.exports = createBaseFor;

/*
    var baseFor = createBaseFor();
    var b = baseFor({x:1, y:2}, function(v, k){
        console.log(v);
    }, Object.keys)
*/