/*
    检测object和source在props上是否符合
*/
function baseConformsTo(object, source, props) {
    var len = props.length;
    if(object == null){
        /*
            !0 为true
            !10 为false
        */
        return !len;
    }
    object = Object(object);
    //遍历props中的属性
    while(len--){
        var key = props[len],
            predicate = source[key],
            value = object[key];
        //当object上没有这个属性，或者source上没这个属性
        if((value === undefined && !(key in object)) || !predicate(value)){
            return false;
        }
    }   
    return true;
}

module.exports = baseConformsTo;
