//to find unique elements in an array and returns a new set
function uniqueEle(arr){
    return [...new Set(arr)]
}
const prompt=require("prompt-sync")({sigint:true}); 
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let arr = prompt("Enter the elements of your arr")
// let uniqEle = uniqueEle(arr)
// console.log(uniqEle);

//Approach number 2
function removeDuplicates(arr){
let uniquearr = []
let seen = new Set();
for(let i=0; i<uniquearr.length; i++){
    let num = arr[i]
    if(!seen.has(num))
        uniquearr.push(arr)
        seen.add(num)
}
return uniquearr
}
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqEle = uniqueEle(arr)
console.log(uniqEle);