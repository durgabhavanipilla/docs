var x = 1; // global variable
function main(){
	console.log("main method/function start");
	//nothing();
	//var1();
	//nan();
	redeclaration();
	usageBeforeDeclaration();
	console.log("main method/function end");
}
function nothing(){
	console.log("nothing method start");
	employeeId = 101;
	firstName = "Bhavani";
	console.log(employeeId);
	console.log(typeof employeeId);
	console.log(firstName);
	console.log(typeof firstName);
	console.log("nothing method end");
}
function var1(){
	console.log("var method start");
	var employeeId;
	var firstName;
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId );
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	employeeId = 102;
	firstName = "kumar";
	console.log("value = "+employeeId);
	console.log("typeof = "+typeof employeeId );
	console.log("value = "+firstName);
	console.log("typeof = "+typeof firstName);
	console.log("var method end");
}
function nan(){
	console.log("nan method start");
	var n1;
	var n2 = 12;
	var n3 = n1 + n2;
	console.log("value Of n3 = " +n3);
	console.log("type Of = n3" +typeof n3);
	console.log("nan method end");
}	
function redeclaration(){
	console.log("redeclaration method start");
	//var firstName = "durga";
	//console.log("value = "+firstName);
	//console.log(typeof firstName);
	//console.log("redeclaration method end");
	var n1;
	var n1; // Expecting Error here
	console.log("redeclaration method end");
}
 function usageBeforeDeclaration(){
	 console.log("usageBeforeDeclaration method start");
	 var n3 = n1 + n2; // Expecting error here
	 var n1 = 12;
	 var n2 = 13;
	 console.log("value = " +n3);
	 console.log("typeof = n3" +typeof n3);
	 console.log("usageBeforeDeclaration method end");
 }
 function blockScope(){
	 console.log("blockScope function start");
	 var x = 2; // local to the function variable
	 {
		 var x = 3; // block variable
		 console.log("x = " +x);
	 }
	 console.log("x = " +x);
	 console.log("blockScope function end");
 }
	 
	 

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
