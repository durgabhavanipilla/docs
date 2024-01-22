function main(){
   console.log("main method start");
   //arrayPrint();
   //arrayToString();
   //arrayToStringWithSeperator();
   //deleteLast();
   //addLast();
   // deleteFirst();
   // addFirst();
    //deleteAtSpecified();
   //addAtSpecified();
   //addElementAtSpecified();
   //addElementsAtSpecified();
   updateElementAtSpecified();
    //deleteElementAtSpecified();
	 //subArray();
   console.log("main method end");
}
function arrayPrint(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees);
}
function arrayToString(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	let employeesString = employees.toString();
    console.log(employees);
}
function arrayToStringWithSeperator(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	let employeeString = employees.join(";");
    console.log(employees);
}
function deleteLast(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees.length);
	employees.pop();
    console.log(employees.length);
}
function addLast(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees.length);
	employees.push("Ravi");
    console.log(employees.length);
}
function deleteFirst(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees.length);
	employees.shift();
    console.log(employees.length);
}
function addFirst(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees.length);
	employees.unshift("Ravi");
    console.log(employees.length);
}
function deleteAtSpecified(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees.length);
    console.log(employees);
	delete employees[3];
    console.log(employees);
    console.log(employees.length);
}
function addElementAtSpecified(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees);
	employees.splice(2,0,"Durga");
    console.log(employees);
}
function addElementsAtSpecified(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees);
	employees.splice(3,0,"durga","ram");
    console.log(employees);
}
function updateElementAtSpecified(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees);
	employees.splice(2,1,"RAvi");
    console.log(employees);
	console.log(employees.length);
}
function deleteElementAtSpecified(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees);
	employees.splice(2,1);
    console.log(employees);
	console.log(employees.length);
}
function subArray(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	console.log(employees);
	let employees2 = employees1.slice(2,4);
    console.log(employees);
	console.log(employees.length);
}










    










