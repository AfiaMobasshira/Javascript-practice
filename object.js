//object in javascript. Object syntax
const student1 = {   //this fields call property in object
    name: "Abir", 
    id: 121, 
    phone: +8801776753266
}
const student2 = {
    name: "Abid",
    id: 122,
    phone: +8801778553266
}
console.log(student1);
console.log(student2);
//object property can be access in 3 way
//1.
let phoneNumber = student1.phone;
// console.log(phoneNumber);
//2.
let phoneNumber2 = student2["phone"];
console.log(phoneNumber2);
//3. we can use a variable to store the property value and then can use it
let phonePropertyName = "name";
let student1Name = student1[phonePropertyName];
console.log(student1Name);

//update property
//1. 
student1.phone = 234567;
student1.name = "Afia";
console.log(student1);
//2.
student1["id"] = 88010;
console.log(student1);
//3. 
let updateName = "name";
student2[updateName] = "Dhanush";
console.log(student2);

//adding property
student1.address = "8/4 housing estate,khalishpur,khulna";
student1["address"] = "khalishpur,khulna";
console.log(student1);


