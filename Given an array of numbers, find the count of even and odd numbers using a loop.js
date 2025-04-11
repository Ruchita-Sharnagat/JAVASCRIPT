const num = [1, 26, 6, 5, 51, 1, 6, 8, 5];
let even = 0, odd = 0;
const evenNo = [], oddNo = []
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element % 2 === 0) {
        //even
        even++
        evenNo.push(num[i])
    } else {
        //odd
        odd++
        oddNo.push(num[i])
    }

}

console.log("Count of even no is ", even, evenNo);
console.log("Count of odd no is ", odd, oddNo);


// console.log(num.filter(ele => ele % 2 != 0));
