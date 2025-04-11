// let arr=[10,110,10111,11111,1011111,10101111]
// let count=1
// for (let i = 0; i < arr.length; i++) {
//     let newArr=arr
//     if (arr==newArr) {
//         count++;
        
//     }
//     console.log(newArr)
// }


// let arr = [10, 110, 10111, 11111, 1011111, 10101111];

// for (let i = 0; i < arr.length; i++) {
//     let binary = arr[i].toString(2); 
//     let ones = 0;
//     let zeros = 0;

//     for (let bit of binary) {
//         if (bit === '1') ones++;
//         else if (bit === '0') zeros++;
//     }

//     if (ones > zeros) {
//         console.log(`Number: ${arr[i]} | Binary: ${binary} | 1s > 0s | 0s count: ${zeros}`);
//     }
// }
// if (currentCount > maxCount) {
        //     maxCount = currentCount;
        // }







// let arr = [1, 1, 0, 1, 11101, 11111111];

// let maxCount = 0;
// let currentCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//         currentCount++;
        
//     } else {
//         currentCount = 0;
//     }
// }

// console.log("Longest sequence of 1s:", maxCount);


let arr = [1, 1, 0, 1, 1, 1,1];

let oneCount = 0;        
let valueCount = 0;    

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        valueCount++;              
        if (valueCount > oneCount) {
            oneCount = valueCount; 
        }
    } else {
        valueCount = 0;            
    }
}

console.log("Longest sequence of 1s:", oneCount);
