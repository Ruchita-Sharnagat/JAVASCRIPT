// let Value
// function palindromeValue(palin) {
//     let newValue = palin.split("").reverse().join("");
//     if(palin==newValue){
//         console.log(palin + " is a palindrome")
//     }
//     else{
//         console.log(palin + " is not palindrome")
//     }
// }
// palindromeValue("mom")

let Value;
 function palindromeValue(palin) {
    Value=palin;
   let newValue = palin.split("").reverse().join("");
   Value==newValue
   ? console.log(Value + "is palindrome")
   : console.log(Value+ " is not palindrome");
   
   
 }
 palindromeValue("ruchita")