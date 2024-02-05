//Problem 1.. finding bigger among 3 numbers...
//Using if-else

/* 
const minMax = (num1, num2) => {
    if(num1 > num2) {
        console.log(`Number 1 is bigger`);
    }
    else {
        console.log(`Number 2 is bigger`);
    }
}
let number1 = 10;
let number2 = 9;

minMax(number1, number2)
 */

//Using Math.max..

/* 
const minMax = (num1, num2, num3) => {
    let bigger = Math.max(num1, num2, num3);
    return bigger;
}
let number1 = 10;
let number2 = 12;
let number3 = 13;
console.log("The bigger number is : ", minMax(number1, number2, number3));
 */


// Problem 2: Finding smaller among 3 numberes

//using if-else..

const num1 = 10;
const num2 = 12;
const num3 = 13;

if(num1 < num2 && num1 < num3) {
    console.log(`The smaller number is : ${num1}`);
}
else if (num2 < num1 && num2 < num3) {
    console.log(`The smaller number is : ${num2}`);
}
else {
    console.log(`The smaller number is : ${num3}`);
}
//using function...
/* 
const minMax = (num1, num2, num3) => {
    let bigger = Math.min(num1, num2, num3);
    return bigger;
}
let number1 = 10;
let number2 = 12;
let number3 = 13;
console.log("The smaller number is : ", minMax(number1, number2, number3));
 */