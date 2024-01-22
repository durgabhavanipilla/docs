function main(){
	console.log("main function start");
	//stringType();
	//emptyArrayWithSquareBraces();
	//empArrayWithNewKeyword();
	//arrayWithValuesWithSquareBraces();
	//arrayWithValuesWithNewKeyword();
	//arrayIndex();
	//arrayIterate();
	//arrayIterateWithForOf();
	//arrayIterateInReverseDirection();
	//getFirstElement();
	//getLastElement();
	 updateElement();
	console.log("main function end");
}
function stringType(){
	let employees = "Durga";
	console.log("employees = " + employees);
	console.log("employees = " + typeof employees);
}
function emptyArrayWithSquareBraces(){
	let employees = [];
	console.log("employees = " + employees);
	console.log("employees = " + typeof employees);
}
function empArrayWithNewKeyword(){
	let employees = new Array();
	console.log("employees = " + employees);
	console.log("employees = " + typeof employees);
}
function arrayWithValuesWithSquareBraces(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log("employees = " + employees);
	console.log("employees = " + typeof employees);
}
function arrayWithValuesWithNewKeyword(){
	let employees = new Array("Azar", "Durga", "Salma", "Sushma");
	console.log("employees = " + employees);
	console.log("employees = " + typeof employees);
}
function arrayIndex(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log("employees = " + employees[0]);
	console.log("employees = " + employees[1]);
	console.log("employees = " + employees[2]);
	console.log("employees = " + employees[3]);
	console.log("employees = " + typeof employees);
}
function arrayWithInitialIndex(){
	let employees = new Array(4);
	console.log("employees = " + employees);
	console.log();
	console.log();
	console.log();
	
}
function arrayIterate(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	for(let i=0; i<employees.length; i++){
		console.log("employees = " + employees[i]);
	}
}
function arrayIterateWithForOf(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	for(let emp of employees){
		console.log("employees = " +emp);
	}
}
function arrayIterateInReverseDirection(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	for(let i = (employees.length-1); i>=0; i--){
		console.log("employees = " + employees);
	}
}
function getFirstElement(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log("employees = " +employees[0]);
}
function getLastElement(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log("employees = " + employees[employees.length-1]);
}
function updateElement(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log("employees = " + employees);
	employees[2] = "Raj";
	console.log("employees = " + employees);
	
}