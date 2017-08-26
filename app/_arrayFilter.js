/*
    根据筛选条件过滤数组元素，
    返回筛选后数组
*/
function arrayFilter(array, predicate) {
    var index = -1,
        len = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];
    while(++index < len){
        var val = array[index];
        if(predicate(val, index, array)){
            result[resIndex++] = val;
        }
    }
    return result;
}

module.exports = arrayFilter;