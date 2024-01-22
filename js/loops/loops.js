function main(){
	console.log("main method start");
	//loop1(5);
	//loop2(5);
	//loop3();
	//loop4();
	//loop5();
	//loopForColumn();
	//loopForRow();
	//nestedForLoop();
	 //forIn();
	 forOf();
	console.log("main method end");
    	
}
function loop1(n){
	let i;
    for (i = 1; i <= n; i++)
	{	
	getEmployee(i);
	}
}
function loop2(n){
	let i;
    for (i = n; i >= 1; i--)
	{	
	getEmployee(i);
	}
}
function getEmployee(empId){
	console.log("get an Employees from Database " + empId);
}
function loop3(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for(let i = 0; i <= employees.length; i++)
	{
		console.log("Employee Name = " + employees[i]);
	}
}
function loop4(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for(let i = 0; i <= employees.length-1; i++)
	{
		console.log("Employee Name = " + employees[i]);
	}
}
function loop5(){
	let employees = ["Steven", "Neena", "Lex", "Alexander", "David", "Valli"];
	for(let employee of employees)
	{
		console.log("Employee Name = " + employee[i]);
	}
}
function loopForRow(){
	
	let i;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		pattern += i;
	}
	console.log(pattern);
}
function loopForColumn(){
	let i;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		pattern += i;
		pattern += "\n";
	}
	console.log(pattern);
}
function nestedForLoop(){
	let c;   
	let r;   
	let pattern = "";
	for(c = 1; c <= 5; c++){
		for(r = 1; r <= 5; r++){
			pattern += r;
		}
		console.log(pattern);
	}
}
function forIn(){
	let employee = {empId:"101", firstName:"Durga", lastName:"Bhavani"};
	let values = "\n";
	for(let property in employee){
		values += employee[property];
		values += "\n";
	}
	console.log("values = " +values);
}
function forOf(){
	let employees = ["Durga", "Salma", "Sushma", "Azar"];
	let values = "\n";
	for(let employee of employees){
		values += employee;
		values += "\n";
	}
	console.log("values = " +values);
}

