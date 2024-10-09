//function structure
function myFunction() {
    // console.log("nothing");
}
myFunction()

//sample function
let num1 = 10;
let num2 = 20;

function addNumber() {
    let result = num1 + num2;
    // console.log(result);
}

addNumber();

//double any number function
function doubleNumber(num){
    output = num * 2 
    console.log(output);
}

doubleNumber(10);
doubleNumber(100);
doubleNumber(1000);

//finding even number
function findEvenNumber(number){
    if(number % 2 == 0){
        console.log("Even Number");
    }
    else{
        console.log("Not Even Number");
    }
}

findEvenNumber(3);

//return function method
function doubleTheNumber(num){
    result = num * 2;
    return result;
}

let firstNumber = doubleTheNumber(2);
let secondNumber = doubleTheNumber(4);
let totalNumber = firstNumber + secondNumber;
console.log(totalNumber);

//adding two number with function method
//two parameter pass method through function
function addNumbers(number1, number2){
    addingOutput = number1 + number2;
    return addingOutput;
}

let totalOutput = addNumbers(10, 20);
console.log(totalOutput);
