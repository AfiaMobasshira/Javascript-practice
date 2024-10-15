// brick calculator with function
function brickCalculator(n){
    const bricksForPerFeet = 1000;
    // here (1 - 10 = 15 feet), (11 - 20 = 12 feet), upper 20 = 10 feet
    if(n <= 10){ 
        return 15 * bricksForPerFeet;        
    }
    else if(n <= 20){
        return 12 * bricksForPerFeet;
    }
    else {
        return 10 * bricksForPerFeet;
    }
}

let result = brickCalculator(8);
console.log(result);

let result2 = brickCalculator(17);
console.log(result2);

let result3 = brickCalculator(30);
console.log(result3);
 