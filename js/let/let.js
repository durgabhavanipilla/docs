let x = 1; // global variable
function main(){
	console.log("main method/function start");
	//let1();
	//nothing();
	//var1();
	//nan();
	//redeclaration();
	//usageBeforeDeclaration();
	//declarationAndDefinationInMultipleLine();
	//declarationAndDefinationInSingleLine();
	reAssignment();
	//blockScope();
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
 /* function redeclaration(){
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
	 let x = 1; //local variable
	 {
		 let x = 2; // block variable
		 console.log("x = " +x);
	 }
		console.log("x = " +x);
		console.log("blockScope function end");
 }
	 
	 
/* Do not declare variables with nothing
   if you declare variables with nothing, 
   we are missing security.	
   
=================================================
 var x = 1;  //global variable
function main(){
  console.log("main method start");
   //redeclaration();
   usageBeforeDeclaration();
   //blockScope()'
   console.log("main method end"):   
}   */
function redeclaration(){
	 console.log("redeclaration method start");
	 let n1;
	 // let n1; //Identifier 'n1' has already been declared
	console.log("redeclaration method end"); 
	}
function usageBeforeDeclaration(){
	console.log("usageBeforeDeclaration method start");
	//let n3 = n1+n2; //Expecting Error here
	                 //Error: Cannot access 'n1' before initialization
	let n1 = 12;
	let n2 = 13;
	let n3 = n1 + n2;
	console.log("value = "+n3);
	console.log("typeof = "+typeof n3);
	console.log("usageBeforeDeclaration method end");
}
function declarationAndDefinationInMultipleLine(){
	let n1;  // declaration
	let n2;   // declaration
	n1 = 12;  // defination
	n2 = 13;  // difination
}
function declarationAndDefinationInSingleLine(){
	let n1 = 12;   // declaration + defination
	let n2 = 13;  // declaration + defination
}
function reAssignment(){
	let n1 = 12;  // declaration + defination
	n1 = 13;   //re-assignment
	n1 = 14;   //re-assignment
	console.log("n1 = " +n1);
}
function blockScope(){
	console.log("blockScope function start");
	let x = 2;  // local variable
	{
		let x = 3; //block variable
		console.log("x = " +x);
	}
	console.log("x = " +x);
	console.log("blockScope function end");
}
	
	
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   


























































