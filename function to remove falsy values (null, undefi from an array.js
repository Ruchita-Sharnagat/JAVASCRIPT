const falsyValue=[null,undefined,false,"",1,2,"apple",3,4]
function removeValue(arry) {
    return arry.filter(Boolean);
    
}
console.log(removeValue(falsyValue))




// function hasNegativeNumber(arr) {
//     return arr.some(num => num < 0);
// }

// let numbers = [3, 7, -1, 10, 5];
// console.log(hasNegativeNumber(numbers)); // Output: true

// let numbers2 = [3, 7, 1, 10, 5];
// console.log(hasNegativeNumber(numbers2)); // Output: false





