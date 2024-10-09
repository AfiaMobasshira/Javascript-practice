//swap variables with temporary value
let a = 6;
let b = 9;
// console.log("before swap: a = ", a,",","b = ", b);
let temp = a;  //here "temp" is a temporary value.
a = b;
b = temp;
// console.log("after swap: a = ", a, ",", "b = ", b);

//swap value with mathmetics operations
let x = 9;
let y = 13;
// console.log("before swap: x = ", x,",","y = ", y);
x = x + y;
y = x - y;
x = x - y;
// console.log("after swap: x = ", x, ",", "y = ", y);

// javascript special swap
let p = 10;
let q = 13;
console.log("before swap: p = ", p,",","q = ", q);
[p, q] = [q, p];
console.log("after swap: p = ", p, ",", "q = ", q);


