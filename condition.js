//if-else condition
let number1 = 40;
let number2 = 10;
let result = number1 + number2;

if(result < 50){
    // console.log("It's less than 50");
}
else if(result == 50){
    // console.log("it's equal to 50");
    
}
else{
    // console.log(result);
}

//day timing
let now = new Date();
if (time = now.getHours()) {
    // console.log("It's night now and the time is");
    // console.log(now);
    // console.log(now.getFullYear());
    
}
else{
    console.log("It's day now and the time is");
    // console.log(now);
}
//("if" always provide condition not parameter)

//not equal condition
let bagPrice = 30000;
if (bagPrice != 15000 && bagPrice < 15000) {
    // console.log("I will buy it");
}
else{
    // console.log("I'll not buy it");
    
}

// and condition, or condition
let theHousePrice = 10000000;
let isMature = true;
if(isMature == true && theHousePrice <= 10000000){
    // console.log("You can buy this house");    
}
else if(isMature == false || theHousePrice <= 10000000){
    // console.log("You can't buy this house cause you are not mature");    
}
else if (isMature == true || theHousePrice > 10000000) {
    // console.log("You can't buy this house cause you haven't enough money to buy it");
}
else{
    // console.log("You should go for next move");
}

//grade calculation
let chemistryValue = 83;
let mathValue = 80;
let physicsValue = 62;
let biologyValue = 92;
chemistryValue = parseFloat(chemistryValue);
mathValue = parseFloat(mathValue);
physicsValue = parseFloat(physicsValue);
biologyValue = + biologyValue;
let calculationResult = (chemistryValue + mathValue + physicsValue + biologyValue)/400 *100;
calculationResult = Math.round(calculationResult);
console.log("Your percentage is" + " " + calculationResult + '%');


if(chemistryValue <= 32 || mathValue <= 32 || physicsValue <= 32 || biologyValue <= 32){
    console.log("Fail");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else if(calculationResult <= 100 && calculationResult >= 80){
    console.log("Grade 'A+'");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else if(calculationResult < 80 && calculationResult >= 70){
    console.log("Grade 'A'");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else if(calculationResult < 70 && calculationResult >= 60){
    console.log("Grade 'A-'");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else if(calculationResult < 60 && calculationResult >= 50){
    console.log("Grade 'B'");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else if (calculationResult <50 && calculationResult >= 40) {
    console.log("Grade 'C'");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else if(calculationResult < 40 && calculationResult >=33){
    console.log("Grade 'D'");
    console.log('Your chemistry number is:' + ' ' + chemistryValue);
    console.log('Your math number is:' + ' ' + mathValue);
    console.log('Your physics number is:' + ' ' + physicsValue);
    console.log('Your biology number is:' + ' ' + biologyValue);
}
else{
    console.log("pass");
}

