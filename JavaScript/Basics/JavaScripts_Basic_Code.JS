let a= 15;
let b= 10;
let c=33;
let str = "QA Automation";
function Summation(a,b){
    let result = a + b;
    console.log("The summation result is: " + result);
}
function Subtraction(a,b){
    let result = a - b;
    console.log("The subtraction result is: " + result);
}
function Multiplication(a,b){
    let result = a * b;
    console.log("The multiplication result is: " + result);
}
function Division(a,b){
    let result = a / b;
    console.log("The division result is: " + result);
}

function checkEvenOdd(a){
    if(a % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}

//classic Reverse String
// function reverseString(str) {
//     let reversedStr = "";
    
//     // Loop starting from the last character to the first
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
    
//     return reversedStr;
// }

// // Example usage:
// console.log(reverseString("javascript")); // Output: "tpircsavaj"


function reverseString(str) {
    let reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
}

function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];   

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    console.log("The number of vowels in the string is: " + count);
}

function checkPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');     

    if (str === reversedStr) {
        console.log("The string is a palindrome.");
    }   
    else {

        console.log("The string is not a palindrome.");
    }   
}

// Function Calls
Summation(a, b);
Subtraction(a, b);
Multiplication(a, b);
Division(a, b);
checkEvenOdd(c);

reverseString(str);
countVowels(str);
checkPalindrome(str)