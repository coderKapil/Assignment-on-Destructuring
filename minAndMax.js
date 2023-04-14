function minmax(arr){
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return [max,min]
}

let arr = [5, 2, 7, 1, 9]
let result = minmax(arr)
console.log(result);