const arr = [12, 3, 4, 5, 55, 66, 7];

// arr.forEach((ele)=>console.log(ele*2)
// )
let sum = 0;
let even = 0, odd = 0
const forEachReturn = arr.forEach(ele => {
    if (ele % 2 == 0) {
        even++
    } else {
        odd++
    }
});
console.log("Sum of array elements are", forEachReturn);
