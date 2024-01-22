function main(){
	console.log("variables method start");
	identifiers();
	console.log("variables method end");
}
function identifiers(){
	console.log("identifiers method start");
	num1 = 123;
	num2 = 223;
	num$ = 323;
	num_ = 423;
	_num = 623;
	num7 = 723; // case sensitive
	NUM7 = 745; // case sensitive
	// num # = 123;
	  // can't have special characters other than _ and $
	// num& = 124;
	  // can't have special characters other than _ and $
	// 1num = 345;
	  // can't start variable-name with digit
	//2num = 124;
	  // can't start variable-name with digit
	// for == 345;
	  // reserved words are not allowed
	// if = 453;
	  // reserved words are not allowed.
	res = num1 + num2;
	console.log(res);
	console.log("identifiers method end");
}