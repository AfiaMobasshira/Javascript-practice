//factorial with for loop
let factorial = 1;
for(let i = 1; i <= 10; i++){
   factorial = factorial * i;
//    console.log(factorial);
}

//factorial with function
function factorialNumb(n){ // hear 'n' is short form of 'number'
    let factorialNumber = 1;
    for(let i = 1; i <= n; i++){
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber;
}

let result = factorialNumb(50);
// console.log(result);

//factorial with reverse number
function factorialReverseNumb(n){
    let factReverseNumber = 1;
    for(let i = n; i >= 1; i--){
        factReverseNumber = factReverseNumber * i;
    }
    return factReverseNumber;  
}

let reverseResult = factorialReverseNumb(5);
console.log(reverseResult);

// let factReverseNumber = 1;
// for(let i = 10; i >= 1; i--){
//     factReverseNumber = factReverseNumber * i;
//     console.log(factReverseNumber);
    
// }
