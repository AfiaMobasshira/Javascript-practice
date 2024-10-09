// 0! = 1
// 1! = 1
// 2! = 1*2
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 6! = 1*2*3*4*5*6
// 6! = (6-1)! * 6
// 7! = (7-1)! * 7
// 8! = (8-1)! * 8
// 9! = (9-1)! * 9
// n! = (n-1)! * n

function factorialRecursive(n){
    if((n == 0) || (n == 1)){
        return 1;
    }
    else{
        return n * factorialRecursive(n-1);
    }   

}
let result = factorialRecursive(4);
console.log(result);
