function main(){
	console.log("main method start");
	//triangle();
	//triangle1();
	//triangle3();
	//triangle4();
	triangle5();
	//triangle6();
	console.log("main method end");
}
	function triangle(){
	let i;
	let j;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= i; j++){
			pattern += i;
		}
		pattern += "\n";
	}
	console.log(pattern);
}
function triangle1(){
	let i;
	let j;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= i; j++){
			pattern += j;
		}
		pattern += "\n";
	}
	console.log(pattern);
}
function triangle3(){
	let i;
	let j;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= 5; j++){
			pattern += i;
		}
		pattern += "\n";
	}
	console.log(pattern);
}
function triangle4(){
	let i;
	let j;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= 5; j++){
			pattern += j;
		}
		pattern += "\n";
	}
	console.log(pattern);
}
function triangle5(){
	let i;
	let j;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= 5; j++){
			if(j < 5 -(i -1)){
				pattern += "";
			}
			else{
				pattern += j;
			}
		}
		pattern += "\n";
	}
	console.log(pattern);
}
function triangle6(){
	let i;
	let j;
	let pattern = "";
	for(i = 1; i <= 5; i++){
		for(j = 1; j <= 5; j++){
			if(j < 5 -(i -1)){
				pattern += " ";
			}
			else{
				pattern += j;
			}
		}
		pattern += "\n";
	}
	console.log(pattern);
}