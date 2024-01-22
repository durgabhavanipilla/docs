console.log("This is employee.js start");
console.log("this = "+this);
class Employee{
	//constructor with three parameters
	constructor(employeeId, email, phoneNumber){
		this.employeeId = employeeId;
		this.email = email;
		this.phoneNumber = phoneNumber;
		console.log("this = "+this);
	}
}
	console.log("This is employee.js end");