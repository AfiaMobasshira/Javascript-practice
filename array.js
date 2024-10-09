let myFamilyAge = [17, 26, 30, 31, 44, 66];
console.log(myFamilyAge);
//to check any element from an array
let myAge = myFamilyAge[1];
//position of an element (array.indexOf())
let positionMyAge = myFamilyAge.indexOf(26);
//change any element from array 
myFamilyAge[0] = 18;
//which element not in array that's indexOf show -1
let positionOfAge = myFamilyAge.indexOf(121);
//element insert an array in last (array.push())
myFamilyAge.push(10);
myFamilyAge.push(12);
console.log(myFamilyAge);
//element remove from an array from last (array.pop())
myFamilyAge.pop();
console.log(myFamilyAge);
//to check array size and which ammount of element are there (array.length)
console.log(myFamilyAge.length);
//element insert the first position of array (array.unshift())
myFamilyAge.unshift(8);
myFamilyAge.unshift(81);
console.log(myFamilyAge);
//element remove from the first position of array (array.shift())
myFamilyAge.shift();
console.log(myFamilyAge);

//array slice (array.slice(start, end))
const petAnimals = ['Dog', 'Cat', 'Horse', 'Parrot', 'Rabbit', 'Crocodile', 'Duck'];
const somePetAnimals = petAnimals.slice(2);
console.log(somePetAnimals);
//(start,end)
console.log(petAnimals.slice(1, 4));
//" - " means it shows from last elements
console.log(petAnimals.slice(-4));
//start from index 2 and end from last in array
console.log(petAnimals.slice(2, -2));
console.log(petAnimals);





