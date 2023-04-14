//swapping of two numbers without using a third variable
function swap(x,y){
  let newx = y
  let newy = x
  return [newx,newy]
}

let x= 10
let y = 5
let result = swap(x,y)
console.log(result);