//factorial with while loop
let factorialNumber = 1;
let i = 1;
while(i <= 10){
    factorialNumber = factorialNumber * i;
    // console.log(i, factorialNumber);
    i++;
}
// console.log(factorialNumber);
//factorial with while loop in function
function calculateFactorial(n){
    let factNumber = 1;
    let i = 1;
    while(i <= n){
        factNumber = factNumber * i;
        i++;
    }
    return factNumber;
}

let result = calculateFactorial(20);
console.log(result);

//factorial with reverse order
function calReverseFactorial(n){
    let factdecreaseValue = 1;
    let i = n;
    while(i >= 1){
        factdecreaseValue = factdecreaseValue * i;
        i--;
    }
    return factdecreaseValue;
}
let factResult = calReverseFactorial(4);
console.log(factResult);

