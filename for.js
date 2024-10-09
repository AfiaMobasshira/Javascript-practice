//1 — for loop syntax with number
for(let i = 0; i <= 10; i++){
    // console.log(i);
}
//2 — print the numers from 12 to 24
for(let i = 12; i <= 24; i++){
    // console.log(i);
}
//3 — Print the ODD numbers from 7 to 31
for(let i = 7; i <= 31; i++){
    if(i % 2 != 0){
        // console.log(i);
    }
}
//4 — Print the EVEN numbers from 10 to -20
for(let i = 10; i <= 20; i++){
    if(i % 2 == 0){
        // console.log(i);
    }
}
//5 — Iterate through all numbers from 1 to 45. Print the following:
//For multiples of 3 print "Three"
//For multiples of 5 print "Five"
//For multiples of 3 and 5 print "FiveThree"
for(let i = 1; i <= 45; i++){
    if(i % 3 == 0 && i % 5 == 0){
        // console.log("Multiplies by Five & Three");
        // console.log(i);
    }
    else if(i % 3 == 0){
        // console.log("Multiplies by Three");
        // console.log(i);
    }
    else if(i % 5 == 0){
        // console.log("Multiplies by Five");
        // console.log(i);
    }
}
//6 — Print all the elements of the following array
let thisIsAnArray = ["element1", "element2", "element3", "element4"];
for(let i = 0; i < thisIsAnArray.length; i++){
    let elementOftheAray = thisIsAnArray[i];
    // console.log(elementOftheAray);
}
//7 — Calculate the sum of all the numbers in the following array
const numbersArray = [1,13,22,123,49];
let sum = 0;
for(let i = 0; i < numbersArray.length; i++){
    sum = sum + numbersArray[i];
}
console.log(sum);