/* Global scope variables start 1 */
g1 = 1; //global scope undeclared type vaariable.
var g2 = 2; //global scope var type variable.
let g3 = 3; // global scope let type variable.
/*Global scope variables end 1 */
console.log("g1 value = " + g1 + "and typeof = " + typeof g1);
console.log("g2 value = " + g2 + "and typeof = " + typeof g2);
console.log("g3 value = " + g3 + "and typeof = " + typeof g3);

function functionScope(){
    /*Function scope variables*/
    fi = 4;    //function scope undeclared type variables
    // Bad Syntax, use let instead of undeclared
    //f1 is global scope, even if you are assigning value to the variable.
    //function scope var type variable

    var f2 = 5; //function var type variable.
    //Bad Syntax, use let instead of var.
    //f2 is global scope, even if you are assigning value to the variable.
    let f3 = 6; // function scope let type variable
   //Good practice
   // We can access function scope variables in function scope. 
   console.log("f1 value = " + f1 + "and typeof = " + typeof f1);
   console.log("f2 value = " + f2 + "and typeof = " + typeof f2);
   console.log("f3 value = " + f3 + "and typeof = " + typeof f3);
   // We can access global scsope variable in function scope.
   console.log("g1 value = " + g1 + "and typeof = " + typeof g1);
   console.log("g2 value = " + g2 + "and typeof = " + typeof g2);
   console.log("g3 value = " + g3 + "and typeof = " + typeof g3);
        {
            /*Block scope variables start*/
            /*block scope undeclared type variable.*/
            b1 = 7;
            //Bad Syntax, use let instead of undeclared
            //b1 is global scoope, even if you are assigning value 
            //to the variable.
            //let b1 = 7; //Good Syntax.
            
            /*block scope var type variable.*/
            var b2 = 8; //Bad Syntax, use let instead of var
            //let b2 = 8; //Good syntax.

            /*block scope let type variable*/
            let b3 = 9; //Good syntax.
            /*Block scope variables end */

        }
        //We can access block scope variables in function scope.
        console.log("b1 value = " + b1 + "and typeof = " + typeof b1);
        console.log("b2 value = " + b2 + "and typeof = " + typeof b2);
        console.log("b3 value = " + b3 + "and typeof = " + typeof b3);

   /*Function scope variables end*/
}
functionScope();
//We can not access block scope variables in global scope.
console.log("g1 value = " + g1 + "and typeof = " + typeof g1);
//console.log("g2 value = " + g2 + "and typeof = " + typeof g2);
console.log("g3 value = " + g3 + "and typeof = " + typeof g3);