//"use strict"
 //The "use strict" directive is only recognized at the begining of 
 // a script or a function.
function main() {
    useStrict();
}
function useStrict() {
    //x = 5;
    //ReferenceError: x is not defined
    let x = 5;
    console.log(x);
    //y = add(123, 234);
    //ReferenceErroe: y is not defined
    let y = add(123, 234);
    console.log(y);
}
//function add(p1, p1) {
    //Duplicate parameter name not allowed in this context
    function add(p1, p2) {
        return (p1 + p2);
    }
