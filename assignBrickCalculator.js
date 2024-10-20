// brick calculator with function
// here (1 - 10 = 15 feet), (11 - 20 = 12 feet), upper 20 = 10 feet
// per feet = 1000 bricks

function brickCalculator(n){
    const bricksPerFeet = 1000;
    let bricks = 0;
    if(n <= 10){
        bricks = n * 15 * bricksPerFeet;
    }
    else if(n <= 20){
        let firstPart = 10 * 15;
        let remaining = n - 10;
        let secondPart = remaining * 12;
        bricks = (firstPart + secondPart) * bricksPerFeet;
    }
    else{
        let firstPart = 10 * 15;
        let secondPart = 10 * 12;
        let remaining = n - 20;
        let thirdPart = remaining * 10;
        bricks = (firstPart + secondPart + thirdPart) * bricksPerFeet;
    }
    return bricks;
}

const count = brickCalculator(20);
console.log(count);