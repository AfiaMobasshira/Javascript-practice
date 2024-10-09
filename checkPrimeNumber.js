// check prime number
// if back 'return' then don't need to 'break' condition

let numb = 18;
for(let i = 2; i < numb; i++){
    if(numb % i == 0){
        // console.log("It's not a prime number");
        break;
    }
    // console.log("It's a prime number");
    break;
}

//prime number with function
function checkPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return "Not prime number.";
        } 
        return "Prime number.";
    }
}
let result = checkPrime(17);
console.log(result);
