// fibonacci series (how rule generate in fibonacci)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ....
// pod ber korar niyom. jei pod ber korte hbe tar ager duita pod er jog korte hbe.
// fibonacci[2] = fibonacci[2-1] + fibonacci[2-2] 
// fibonacci[3] = fibonacci[3-1] + fibonacci[3-2]
// fibonacci[4] = fibonacci[4-1] + fibonacci[4-2]
// fibonacci[5] = fibonacci[5-1] + fibonacci[5-2]
// fibonacci[6] = fibonacci[6-1] + fibonacci[6-2]
// fibonacci[7] = fibonacci[7-1] + fibonacci[7-2]
// fibonacci[n] = fibonacci[n-1] + fibonacci[n-2]
// fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]

//fibonacci series with for loop
let fibonacci = [0, 1];
for(let i = 2; i <= 10; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    // console.log(fibonacci[i], fibonacci[i-1], fibonacci[i-2]);
}
// console.log(fibonacci);

//fibonacci with function
function fibo(n){
    let myFiboArray = [0,1];
    for(let i = 2; i <= n; i++){
        myFiboArray[i] = myFiboArray[i-1] + myFiboArray[i-2];
    }
    return myFiboArray;
}
let result = fibo(15);
// console.log(result);



