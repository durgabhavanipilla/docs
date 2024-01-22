function main(){
	console.log("main function start");
	//undefinedFun();
   	//nullFun();
	//number();
	//bigInt();
    //string();
	boolean();
    //dynamic();
	arrays();
	objects();
	console.log("main function end");

}
function undefinedFun(){
	console.log("undefined function end");
	let n1;
	console.log("The value of n1 = " + n1);
	console.log("The datatype of n1 = " + typeof n1);
	console.log("undefined function end");
}
function nullFun(){
	let n1 = null;
	console.log("the value of n1 = " + n1);
	console.log("the datatype of n1 = " + typeof n1);
}
function number(){
	let n1;
	console.log("the value of n1 = " + n1);
	console.log("the datatype of n1 = " + typeof n1);
    n1 = 12;
	console.log("the value of n1 = " + n1);
	console.log("the datatype of n1 = " + typeof n1);
    //let n1 = 9865654879;
	//let n2 = 678697087987;
	//let n3 = n1 + n2;
	//console.log("the value of n3 = " +n3);
	//console.log("the datatype of n3 = " +n3);
}
function bigInt(){
	let n1 = 123456789012345678901234567890n;
	console.log(n1);
	console.log("the value of n1 = " + n1);
	console.log("the datatype of n1 = " + typeof n1);
    let n2 = 9007199254740999;
	console.log(n2);  //
}
function string(){
	let s1 = "Durga";
	let s2 = "Bhavani";
	console.log("The value of s1 = " + s1);
	console.log("The data type of s1 = " +typeof s1);
    console.log("value of s2 = " +s2 );
	console.log("The datatype of s2 = " +typeof s2);
}
function boolean(){
	let isManager = true;
	console.log("The value of isManager = " +isManager);
	console.log("The datatype of isManager = " +typeof isManager);
    let isEmployee = "true";
	console.log("The value of isEmployee = " +isEmployee);
	console.log("The datatype of isEmployee = " +typeof isEmployee);
	let x = 2;
	let y = 3;
	let z = 2;
	console.log("The value is = " +(x==y));
	console.log("The datatype is = " + typeof(x==y));
	console.log("The value is = " +(x==z);
	console.log("The datatype is = " + typeof(x==z));
	
}
function dynamic(){
	let n1;
	
	
}
function arrays(){
	let a1 = [];
	console.log("the value of a1 = " + a1);
	console.log("the datatype of a1 = " + typeof a1);
	
}
function objects(){
	let o1 = {};
	console.log("the value of o1 = " + o1);
	console.log("the datatype of o1 = " + typeof o1);
	
}















