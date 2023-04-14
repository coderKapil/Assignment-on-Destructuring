//assign first , second var name to the first and second val of arr
function randomVar(arr){
  const [first,second,...rest] = arr
  let last = rest.pop()
  return [first,second,last]
}

let arr = [1,2,3,4,5]
let result = randomVar(arr)
console.log(result);