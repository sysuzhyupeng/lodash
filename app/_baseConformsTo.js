/*

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
    while(len--){
        var key = props[len],
            predicate = source[key],
            value = object[key];
        if((value === undefined && !(key in object)) || !predicate(value)){
            return false;
        }
    }   
    return true;
}

module.exports = baseConformsTo;
