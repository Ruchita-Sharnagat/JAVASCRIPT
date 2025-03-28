
const numbers = [1, 2, 3, 2, 4, 2, 5, 2, 6];


function countOccurrences(arr, item) {
    return arr.filter(value => value === item).length; 
}
console.log(countOccurrences(numbers,2));
