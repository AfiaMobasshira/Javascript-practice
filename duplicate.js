// find and remove deuplicate element from an array
const studentID = [3, 2, 5, 4, 6, 7, 5, 3, 1, 10, 12];
const uniqueStudentID = [];

for(let i = 0; i < studentID.length; i++){
    const element = studentID[i];
    const index = uniqueStudentID.indexOf(element);
    if(index == -1){
        uniqueStudentID.push(element);
    }
}

console.log(uniqueStudentID);

