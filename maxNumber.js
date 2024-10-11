// find max number with "if" condition
let number1 = 750;
let number2 = 550;
let number3 = 350;

if(number1 > number2){
    if(number1 > number3){
        console.log("number1 is big", number1);
    }
    else{
        console.log("number3 is big", number3);
    }
}
else{
    if(number2 > number3){
        console.log("number2 is big", number2);
    }
    else{
        console.log("number3 is big", number3);
    }
}

// max value with js function
let person1Income = 10000;
let person2Income = 15000;
let person3Income = 50000;
let maxValue = Math.max(person1Income, person2Income, person3Income);
// console.log(maxValue);

//array max size
let myArray = [10, 15, 20, 25];
let maxValue2 = myArray[0]; // initialize to the first value

for(let i = 0; i < myArray.length; i++){
    if(maxValue2 < myArray[i]){
        maxValue2 = myArray[i];
    }
}
console.log(maxValue2);

//solution for loop
//In this loop through each element in the array and compare it with a previously stored maximum value. If the current element is greater, update maximum.

let numbers = [3, 7, 6, 2, 9, 8];
let max = numbers[0];  // initialize to the first value

for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
}
console.log(max);

//maximum value spread operator
let ages = [17, 13, 23, 54, 67, 32];
let maxValue3 = Math.max(...ages);
console.log(maxValue3);

