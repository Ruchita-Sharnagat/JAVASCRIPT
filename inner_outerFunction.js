// function outer(){
//     function inner(){
//         console.log("hello")
//     }
//     inner("world")
// }




function outer() {
    console.log("world")
    function inner() {
        console.log("hello");
    }
    inner();
    // outer();  
}
outer();
 
