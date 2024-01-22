function main(){
	console.log("main method start");
	//ifTrue();
	//ifFalse();
	//ifElseTrue();
	//ifElseFalse();
	//ifCondition(13);
	//elseIfLadder(8);
	//greeting(15);
	//switchCaseBreak();
	switchCaseBreak1();
	console.log("main method end");
}
function ifTrue(){
	if(1 == 1){
	console.log("ifTrue true condition");
	}
}
function ifFalse(){
	if(1 == 2){
		console.log("ifFalse true condition");
    }
}
function ifElseTrue(){
	if(1 == 2){
		conslole.log("if block true condition");
	}else{
		console.log("else block true condition");
}   }
function ifElseFalse(){
	if(1 == 2){
		console.log("if condition true condition");
	}else{
		console.log("else block false condition")
	}
}
function ifCondition(age){
    //let age = 17;
    if(age>=18){
      console.log("you are eligible to apply for voter card");
	}
	else{  
	  console.log(" you are not eligible to apply for voter card");
	  console.log("please appy after " + (18-age) + "years");
	}
}
function elseIfLadder(cls){
	//let cls = 45;
	if(cls <= 5)
	{
	  console.log("Go to Primary school");
	}
	else if (cls <= 10){
		console.log("Go to High school");
	}
	else if (cls <= 12){
		console.log("Go to Inter school");
	}
	else if (cls <= 15){
		console.log("Go to Degree school");
	}
	else {
		console.log("Go to PG college");
	}
}
function greeting(hour){
	//const hour = new Date().getHour();
 
	if(hour <= 12)
	{
	  console.log("Hi, Good Morning");
	}else if (hour <= 16){
		console.log("Hi, Good Afternoon");
	}else if (hour <= 20){
		console.log("Hi, Good Evening");
	}else if (hour <= 24){
		console.log("Hi, Good Night");
	}else {
		console.log(" nothing ");
	}
}
function switchCaseBreak(){
	const day = new Date().getDay();
	let greeting;
	switch(day){
		case 0:
		{
			greeting = "Sunday";
			break;
		}
		case 1:{
			greeting = "Monday";
			break;
		}
		case 2:{
			greeting = "Monday";
			break;
		}
		case 3:{
			greeting = "Tueday";
			break;
		}
		case 4:{
			greeting = "Thursday";
			break;
		}
		case 5:{
			greeting = "Friday";
			break;
		}
		case 6:{
			greeting = "Saturday";
			break;
		}
		console.log(greeting);
	}
}
function switchCaseBreak1(){
	const day = new Date().getDay();
	let greeting;
	switch(day){
		case 0:{
			greeting = "No Greet";
			break;
		}
		case 1:{
			greeting = "No Greet";
			break;
		}
		case 2:{
			greeting = "No Greet";
			break;
		}
		case 3:{
			greeting = "Monday";
			break;0
		}
		case 4:{
			greeting = "No Greet";
			break;
		}
		case 5:{
			greeting = "Good Morning";
			break;
		}
		case 6:{
			greeting = "Good Morning";
			break;
		}
		case 6:{
			greeting = "Good Morning";
			break;
		}
		case 7:{
			greeting = "Good Morning";
			break;
		}
		case 8:{
			greeting = "Good Morning";
			break;
		}
		case 9:{
			greeting = "Good Morning";
			break;
		}
		case 10:{
			greeting = "Good Morning";
			break;
		}
		case 11:{
			greeting = "Good Morning";
			break;
		}
		case 12:{
			greeting = "Good Afternoon";
			break;
		}
		case 13:{
			greeting = "Good Afternoon";
			break;
		}
		case 14:{
			greeting = "Good Afternoon";
			break;
		}
		case 15:{
			greeting = "Good Afternoon";
			break;
		}
		case 16:{
			greeting = "Good Evening";
			break;
		}
		case 17:{
			greeting = "Good Evening";
			break;
		}
		case 18:{
			greeting = "Good Evening";
			break;
		}
		case 19:{
			greeting = "Good Evening";
			break;
		}
		case 20:{
			greeting = "Good Evening";
			break;
		}
		case 21:{
			greeting = "Good Night";
			break;
		}
		case 22:{
			greeting = "Good Night";
			break;
		}
		case 23:{
			greeting = "Good Night";
			break;
		}
		case 24:{
			greeting = "Good Noon";
			break;
		}
	}
	console.log(greeting);
}






















	






