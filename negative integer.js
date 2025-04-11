// function negativeInteger(product) {
//     if (product==0) {
//      return 1;
        
//     }


    
// }



function productOfDigits(num) {
    
    let positiveNum = Math.abs(num);
    let numString = positiveNum.toString();
    let digitsArray = numString.split('');
    let product = digitsArray.reduce((acc, digit) => acc * Number(digit), 1);
    return product;
}
console.log(productOfDigits(1234));   
console.log(productOfDigits(-4567896));   
