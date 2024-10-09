function inchToFeet(inch) {
    const feet = inch / 12;
    const result = Math.round(feet);
    return result;
}

/*const person1 = inchToFeet(124);
console.log(person1);
const person2 = inchToFeet(100);
console.log(person2);
const person3 = inchToFeet(300);
console.log(person3);*/

//let's check with for loop
let inchList = [126, 288, 300, 420];

for (let i = 0; i < inchList.length; i++) {
    const feetResult = inchToFeet(inchList[i]);
    console.log(feetResult);
    
}
