/*
	给set增加元素
*/
function addSetEntry(set, value){
	// Don't return `set.add` because it's not chainable in IE 11.
	set.add(value);
	return set;
}
module.exports = addSetEntry;