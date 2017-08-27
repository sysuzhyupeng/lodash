/*
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
    var type = typeof value;
    //这里函数对象也被包含进来
    //因为原本typeof fn = 'function'
    return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;