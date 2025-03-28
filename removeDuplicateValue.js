// let number = [10,11,14,15,16,18,17,20,10,14]

// function removeDuplicates(arr){
//     return arr.filter((ele,index)=> arr.indexOf(ele)===index)} 
// console.log(removeDuplicates(number));


let number = [10,11,14,15,16,18,17,20,10,14]
function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates(number));
