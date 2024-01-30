function main() {

    console.log("This is main");
    
    addition1(12, 13);
    
    let d = addition2(5, 6);
    console.log(d);
}

function addition1(a ,b) {
     let c = a + b;
     console.log(c);
}

function addition2(a, b) {
    return a + b;
}

let e = function() {
    console.log(15 + 16);
}    
