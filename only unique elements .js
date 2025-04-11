// const arr=[1,2,3,4,3,1,5]
// const newArr= []
// function uniqueElement(array) {
//     array.filter(arr==newArr)
//     return array
// }
// console.log(uniqueElement(arr))


// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 7, 2, 2, 8, 1, 3];

// function getUniqueArray(arr) {
//     return arr.filter;
// }

// const uniqueArray = getUniqueArray(originalArray);
// console.log(uniqueArray); 



const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 7, 2, 2, 8, 1, 3];

function getUniqueArray(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// const uniqueArray = getUniqueArray(originalArray);
// console.log(uniqueArray); 


console.log(getUniqueArray(originalArray))