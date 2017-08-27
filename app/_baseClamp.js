/*
	Clamp返回一个[lower, upper]中更接近哪一个
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
