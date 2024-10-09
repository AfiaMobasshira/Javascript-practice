// fibonacci series 
// [0,1,1,2,3,5,8,13,21]
// nth position
// fibonacci[n] = fibonacci[n-1] + fibonacci[n-2];
function fibonacci(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0,1];
    }
    else{
        // calculate array nth element
        let fibo = fibonacci(n-1);
        let nextFiboElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextFiboElement);
        return fibo;
    }
}

let result = fibonacci(5);
console.log(result);
