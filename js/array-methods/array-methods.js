function main(){
	console.log("main function start");
	//arrayPrint();
	//arrayToString();
	//arrayToStringWithSeparator();
	//addLast();
	//addFirst();
	//deleteLast();
	//deleteFirst();
	//deleteAtSpecifiedValue();
	//deleteAtSpecifiedValueAndPosition();
	//addAtSpecifiedPosition();
	updateAtSpecifiedPosition();
	subArray();
	console.log("main function end");
}
function arrayPrint(){
	let employees = ['Azar', 'Durga', 'Salma', 'Sushma'];
	console.log(employees);
}
function arrayToString(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log(employees.toString());
}
function arrayToStringWithSeparator(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	console.log(employees.join(" $ "));
}
function addLast(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.push("Raj");
	console.log(employees.toString());
}
function addFirst(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.unshift("Ram");
	console.log(employees.toString());
}
function deleteLast(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.pop();
	console.log(employees.toString());
}
function deleteFirst(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.shift();
	console.log(employees.toString());
}
function deleteAtSpecifiedValue(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	delete employees[0];
	console.log(employees.toString());
}
function deleteAtSpecifiedValueAndPosition(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.splice(1,3);  // 0 means index, 1 means delete
	console.log(employees.toString());
}
function addAtSpecifiedPosition(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.splice(1,0,"ravi", "Ram");
	console.log(employees.toString());
}
function updateAtSpecifiedPosition(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	employees.splice(2,1,"raj");
	console.log(employees.toString());
}
function subArray(){
	let employees = ["Azar", "Durga", "Salma", "Sushma"];
	let subArray = employees.slice(1,3);
	console.log(subArray);
}


