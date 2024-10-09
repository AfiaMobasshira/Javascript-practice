var myAge = 25;
console.log(typeof myAge);

var person = {
    name: "Afia",
    age: 24,
    color: "brown",
    height: "5'2"
}

let human = document.getElementById('demo');
human.innerText = person.name + " " + person.color;

console.log(typeof person.height);

let teaLine = ['Palam', 'Jamal', 'Kamal', 'Salam', 'Balam'];
teaLine.splice(2,2);
console.log(teaLine);