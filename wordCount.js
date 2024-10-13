//count the words
const mySpeech = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

// console.log(mySpeech.length);  //we can find length of a string
// console.log(mySpeech[3]);     //we can find index of an string

let count = 0;
for(let i = 0; i < mySpeech.length; i++){
    const char = mySpeech[i];
    if(char == " " && mySpeech[i-1] !== " "){
        count++;
    }
}
count++;   //for count the last word
console.log(count);

// (mySpeech[i-1] !== " ") for extra gap not count.
