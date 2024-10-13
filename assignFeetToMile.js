// let's find feet to mile
//divide the length value by 5280
function feetToMile(feet){
    const mile = feet / 5280;
    const result = mile.toFixed(8);
    return result;
}

const totalMile = feetToMile(10);
console.log(totalMile);

// let's find mile to feet
//multiply the length value by 5280
function mileToFeet(mile){
    const feet = mile * 5280;
    return feet;
}
const totalFeet = mileToFeet(2);
console.log(totalFeet);


