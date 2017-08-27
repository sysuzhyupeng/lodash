/*
	_.isNull(null);
    => true
   _.isNull(void 0);
    => false
*/
function isNull(value) {
    return value === null;
}

module.exports = isNull;