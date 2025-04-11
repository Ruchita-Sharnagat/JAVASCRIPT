// let Value=[10,20,40,30,80]
// function greaterValue(arr){
//     return arr.filter((number=>number<arr))
// }
// console.log(Value);


// let Value=[10,20,40,30,80]
// let Largest=0
// for (let index = 0; index < Value.length; index++) {

//     if(Value[index]>Largest){
//         Largest = Value[index]
//     }
    
// }
// console.log(Largest)


// let Value=[10,20,40,30,80]
// let Largest
// for (let index = 0; index < Value.length; index++) {

//     if(Value[index]<Largest){
//         Largest = Value[index]
//     }
    
// }
// console.log(Largest)

const a = [50, 12, 8, 130, 44];
let res = a[0] 
for (let i = 1; i < a.length; i++) {
    if (a[i] < res) {
        res = a[i];  
    }
}
console.log(res);  
