function main(){
	redeclaration();
	//usageBeforeDeclaration();
	//declarationAndDefinationInMultipleLine();
	//declarationAndDefinationInSingleLine();
	//reAssignment();
	//blockScope();
	//hoisting();
	//redeclarationAndBlockScope();
}
function redeclaration(){
	 const x = 1;
	 // const x = 2; // Error: Identifier 'x' has already been declared
	 }
function usageBeforeDeclaration(){
	console.log("usageBeforeDeclaration method start");
	//const z = x + y; //Expecting Error here
	                 //Error: Cannot access 'x' before initialization
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log("z = " +z);
	console.log("typeof = " +typeof z);
	console.log("usageBeforeDeclaration method end");
}
function declarationAndDefinationInMultipleLine(){
    //const x; // declaration
	          // SyntaxError: Missing initialization in const variable
	  // x = 2; // defination
	 const x = 2;
	 console.log(x);
}
function declarationAndDefinationInSingleLine(){
	const n1 = 12;  // declaration + initialization
    const n2 = 13;  // declaration + initialization	
    const n3 = n1 + n2;
	console.log(n3);
}
function reAssignment(){
	const num1 = 2;  // declaration + defination
	//num1 = 4;   //TypeError: Assignment to const variable
	const university = "JNTUH";   //  declaration + defination
	// university = "HCU";  // TypeError: Assignment to const variable
}
function blockScope(){
	console.log("function scope start");
	const a = 2;
	   {
		console.log("blockScope start");
		var x = 1; //block variable
		const y = 2;
		console.log(a);
		console.log(y);
		console.log("blockScope end");
	   }
	    console.log(a);
		console.log(x);  // x can be used here
    	console.log(y);  // ReferenceError : y is not defined.
	    console.log("function scope end");
}
function hoisting(){
	// const x = x + y;
	// ReferenceError: Cannot access 'x' before initialization
	const x = 1;
	const y = 2;
	const z = x + y;
	console.log(z);
}
function redeclarationAndBlockScope(){
	var x = 1;
	const y = 2;
	console.log(x);
	console.log(y);
	{
		var x = 3;
		const y = 4;
		console.log(x);
		console.log(y);
	}
	console.log(x);
	console.log(y);
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

