const removeValue=[1,2,3,4,5,6,7,8,7,2,2,8,1,3]
const value=7;
for(let i=0;i<removeValue.length;i++){
    if(removeValue[i]==value){
        removeValue.splice(i,1)
    }
    
    
}
console.log(removeValue);
    