// const names = ["kalyani", "ruchita", "sharavari", "vishal"]
// const splicedArray = names.splice(1,3,"new value",33,44,null);

// console.log("existing array", names, "splicedArray", splicedArray);


// const names=["bannan","apple","cherry","Mango"]
// names.splice(0,2)
// console.log(names);


const names=["bannan","apple","cherry","Mango"]
function spliceElement(arr) {
    arr.splice(-1,1)
    return arr;
    
}
console.log(spliceElement(names))
