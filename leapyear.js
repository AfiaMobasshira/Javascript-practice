function findLeapYear(year){
    let result;
    if((year % 4 === 0) && !(year % 100 === 0) || (year % 400 === 0)){
        result = true;
        console.log(year, "is leap year");
    }
    else{
        result = false;
        console.log(year, "is not a leap year"); 
    }
    return result;
}

let leapYearResult = findLeapYear(2024);
console.log(leapYearResult);
