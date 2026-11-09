let a= 15;
let b= 10;
function Summation(a,b){
    result = a + b;
    console.log("The summation result is: " + result);
}
function Subtraction(a,b){
    result = a - b;
    console.log("The subtraction result is: " + result);
}
function Multiplication(a,b){
    result = a * b;
    console.log("The multiplication result is: " + result);
}
function Division(a,b){
    result = a / b;
    console.log("The division result is: " + result);
}

function checkEvenOdd(a){
    if(a % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }