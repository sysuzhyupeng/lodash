/*
	对于[lower, upper],
	如果number在区间内，则返回number,
	否则返回更接近于lower或者upper
*/
function baseClamp(number, lower, upper) {
	/*
		当number不为NaN的时候
	*/
  	if(number === number){
  		if(upper !== undefined){
  			//当number大于upper的时候，number = upper
  			number = number <= upper ? number : upper;
  		}
  		if(lower !== undefined){
  			//当number小于lower的时候，number = lower
  			number = number >= lower ? number : lower;
  		}
  	}
  	return number;
}

module.exports = baseClamp;
