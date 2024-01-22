console.log("this is user.js start");
console.log(this);
class USer{
	//constructor withi parameters
	constructor(firstName, lastName, phoneNumber)
	{   
	   
		//this.firstName = firstName;
		//this.lastName = lastName;
		//this.phoneNumber = phoneNumber;
		console.log("this = "+ this);
	}
}
	console.log("this is user.js end");
	constructor(firstName, lastName, phoneNumber)
	{ 
	console.log("org constructor start");
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	console.log(this);
	console.log("org constructor end");
	}
	//methods
	createUser(firstName, lastName, phoneNumber)
	{
		console.log("createUSer start");
	this.firstName = firstName;
	this.lastName = lastName;
	this.phoneNumber = phoneNumber;
	console.log(this);.
	console.log("createUser end");
	}
	getUser(){
		return"{" + '"firstName":' +this.firstName+ ',"lastChild":'
		+ this.lastName+ ',"lastName"}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	