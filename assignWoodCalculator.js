// function for calculate wood amount for making furnitures.
function woodCalculator(chair, table, bed){
    const woodForChair = 1; //cubicfeet
    const woodForTable = 3; //cubicfeet
    const woodForBed = 5; //cubicfeet
    let sum = 0;

    const numberOfChair = chair * woodForChair;
    const numberOfTable = table * woodForTable;
    const numberOfBed = bed * woodForBed;
    const result = numberOfChair + numberOfTable + numberOfBed;
    sum = sum + result;
    return sum;
}

const totalResult = woodCalculator(8, 2, 4);
console.log("Need", totalResult, "cubicfeet wood");
const totalResult2 = woodCalculator(4, 1, 2);
console.log("Need", totalResult2, "cubicfeet wood");