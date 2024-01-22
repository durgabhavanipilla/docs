function main(){
	console.log("main method start");
	//concatenate();
	//concatenate2();
	//addition1();
	//addition2();
	//subtraction();
	//multiplication();
	//division();
	//remainder();
	//increment();
	decrement();
	//append();
	//comparison();
	console.log("main method end");
	
}
function concatenate(){
	let firstName = "Surya";
	let secondName = "chandra";
    let fullName = firstName+secondName; //this way is better way
	console.log(fullName);
	
}
function concatenate2(){
	let firstName = "Surya";
	let secondName = "chandra";
    firstName += secondName;
	console.log(firstName);
	
}
function addition1(){
    let x = 2;
	let y = 5;
	 //x = x + y;
	 x += y;
	console.log(x);
}
function addition2(){
    let x;
	let y;
	let z;
	let w;
	console.log(typeof x);
	x = 2;
	y = 3;
	z = 5;
	console.log(typeof x);
	console.log(typeof y);
	console.log(x + y);
	 x = "12";
	 y = "13";
	 w = "16";
	 let v = z +w;
	console.log(x + y);
	console.log(v);
	console.log(typeof v);
}
function subtraction(){
    let x = 22;
	let y = 13;
	let z = x-y;
	console.log(z);
}
function multiplication(){
    let x = 2;
	let y = 3;
	let z = x*y;
	console.log(z);
}
function division(){
    let x = 10;
	let y = 2;
	let z = x/y;
	console.log(z);
}
function remainder(){
    let x = 12;
	let y = 13;
	let z = x%y;
	console.log(z);
}
function increment(){
    let x = 5; 
	let y = 5;
	console.log(x);  //5
	console.log(y);  //5
   	x = x++;   //post increment 
	y = ++y;   //pre increment 
	console.log(x);  //5
    console.log(y);	 //6
	console.log(x++);  //5  ..js it will print 5 only, in java it will print 6
	console.log(++y);  //7
}
function decrement(){
	let x = 5;
	let y = 5;
	console.log(x);
	console.log(y);
	let a = x--;   //post decrement  5
	let b = --y;   //pre decrement  4
	console.log(x);  //4
    console.log(y);	 //4
	console.log(a);  //5 
	console.log(b);  //4	
}
function append(){
    let fn = 'Ravi';
	let ln = 'Kumar';
	let x = 11;
	let y = 12;
	let z = '13';
	let a = x + y + z;
	let b = z + y + x;
	console.log(a);
	console.log(b);
	console.log(fn+ " " +ln);
}
function comparison(){
	let x = 11;
	let y = 12;
	let z = 13;
	console.log(x==y); // false
	console.log(x==z); // false
	console.log(x!=y); // true
	console.log(x!=z); // true
}

/*  What is the overloaded operator in javascript and java?
    + addition and append
	What is difference  between == and === operators?
	What is ternary operator?
*/



















