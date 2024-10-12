// sum of an array
let numbers = [27, 45, 12, 73, 60];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
}

// console.log(sum);

// sum of array with function
 function sumMarks(marks){
    let result = 0;
    for(let i = 0; i < marks.length; i++){
        let element = marks[i];
        result = result + element;
    }
    return result;
 }

let marks = [78, 85, 92, 88, 76, 97];
let total = sumMarks(marks);
console.log("You got total", total, "out of 600");
//another way to find result
let totalMarks = sumMarks([77, 66, 88, 99, 98, 67]);
console.log("You got total", totalMarks, "out of 600");


 