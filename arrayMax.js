let marks = [56, 45, 82, 60, 77, 89, 93, 33];
let max = marks[0];

for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log(max);
