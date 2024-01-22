 /*
 function caluclate(sign){
	let s1 = document.getElementById("n1").value;
	let s2 = document.getElementById("n2").value;
	let n1 = parseInt(s1);
	let n2 = parseInt(s2);
	let res1 = caluclateNode(n1, n2, sign);
	console.log(res1);
	document.getElementById("res").innerHTML = res1;
}
function caluclateNode(n1, n2, sign){
	console.log("calculateNode method start");
	switch(sign){
	  case "+":{
		 res = addition(n1, n2);
		 break;
	  }
	  case "-":{
		 res = subtraction(n1, n2);
		 break;
	  }
	  case "*":{
		res = multiplication(n1, n2);
		break;
	  }
	  case "/":{
		  res = division(n1, n2);
		  break;
	  }
	}
	return res;
}
function addition(n1, n2){
	let res = (n1 + n2);
	return res;
}
function subtraction(n1, n2){
	return (n1 - n2);
	return res;
}
function multiplication(n1, n2){
	let res = ( n1 * n2);
	return res;
}
function division(n1, n2){
	let res = (n1 / n2);
	return res;
}
//calculateNode(123,123,'*');
*/
//" use strict"
 function main(){
	 console.log("main function start");
	 addition();
	 addition1(2,3);
	 addition1(22,33);
	 addition1(2344,7897);
	 addition1(2341,18938);
	 addition1(3,5);
	 let c = addition2(23,56);
	 console.log("c = " +c);
 }
 function addition(){
	 let c = 2 + 3;
	 console.log("c = " +c);
 }
function addition1(a, b){
	let c = a + b;
	console.log("c = " +c);
}
function addition2(a, b){
	return a + b; //let c = a + b;
	//return c;
	//console.log("c = " +c);
}















//












































	