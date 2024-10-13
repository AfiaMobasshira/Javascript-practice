//reverse string/word
function reverseString(str){
    let reverse = "";
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

const statement = "Hello, How are you?";
const result = reverseString(statement);
console.log(result);
//also can do this
const result2 = reverseString("How's your day today?");
console.log(result2);