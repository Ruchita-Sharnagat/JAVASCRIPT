// const names = ["kalyani", "ruchita", "sharavari", "vishal"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

const names = [1,2,3,4,5];
const lengthofArray=names.length //5
console.log("Before loop array value",names);

for (let i = 0; i <lengthofArray ; i++) {
    console.log(names[i]); //2
    names[i]=i*10 
    console.log(names[i]); //0
}

console.log("After loop array value",names);
