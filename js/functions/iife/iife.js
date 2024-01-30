(
    function () {
        console.log("This is IIFE Function");
    }
)

();

(
    function (a, b) {
        console.log("This is IIFE Function with params = "+(a+b))
    }
)

(5, 3);

function normalFunction1() {
    console.log("This is normalFunction1");
}

normalFunction2();

function normalFunction2(){

    console.log("This is normalFunction2");
}