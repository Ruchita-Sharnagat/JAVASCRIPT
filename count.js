
const numbers = [1, 2, 3, 2, 4, 2, 5, 2, 6];


function countOccurrences(arr, item) {
    
    const occursnce = arr.filter(function (ele, index, arrr) {
        if (ele === item) {
            return ele
        }
    })
    const count= occursnce.length
    return count
}
console.log(countOccurrences(numbers, 2));
