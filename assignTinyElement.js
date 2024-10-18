// find large element from an array
function longFriend(arr){
    let lgth = 0;
    let longest;

    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        lgth = arr[i].length;
        longest = arr[i];
    }
    }
    return longest;
}

const myFriends = ["timy", "tabassum", "mim", "hoaa"];
const result = longFriend(myFriends);
console.log(result);

//find small element from an array
function tinyFriend(arr){
    let smallest = arr[0];
    for(let i = 1; i < arr.length; i++){
        let element = arr[i];
        if(element.length < smallest.length){
            smallest = element;
        }
    }
    return smallest;
}

const myFriends2 = ["rain", "jasid", "abcdef", "raw"];
const result2 = tinyFriend(myFriends2);
console.log(result2);



