//ACtual solution
function wordCount(text){
    // split the text by spaces to get individual words
    let words = text.split(" ")
    // initialize an empty object to store the word counts
    let countMap = {};
    for(let word of words){
        // if the word is already in the object, increment its count
        if(countMap[word]){
            countMap[word]++
        }
        // otherwise, add it to the object with a count of 1
        else{
            countMap[word] = 1
        }
    }
    return countMap
}


//count the occurence of a word in a string
// function countOccurrences(str,word)
//     {
//         // split the string by spaces in a
//     let a = str.split(" ");
  
//     // search for pattern in a
//     let count = 0;
//     for (let i = 0; i < a.length; i++)
//     {
//     // if match found increase count
//     if (word==(a[i]))
//         count++;
//     }
  
//     return count;
//     }

//count the occurence of a letter in a string
function countLetterOccurence(str,letter){
    let  count = 0

    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == letter){
            count++;
        }
    }
    return count
}
const prompt=require("prompt-sync")({sigint:true}); 
// const str = prompt('Enter a string: ');
// const word = prompt('Enter a word to check: ');
// const result = countOccurrences(str,word)
// console.log(result);

// const str = prompt('Enter your string: ')
// const letter = prompt('Enter your letter to check: ')
// const result1 = countLetterOccurence(str,letter)
// console.log(result1);

let text = prompt("Enter your text: ")
let count = wordCount(text)
console.log(count);