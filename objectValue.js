let car1={
    name:"Honda City",
    manufactoring:"Honda",
    fuelCapacity:40,
    isAutomatics:false,
    greetMe:function(num) {
        console.log("hello moto");
        return num
        
    }
}
// console.log(car1.greetMe());
// console.log(car1.greetMe(123));
// car1.price=4000
// console. log(car1)
// car1.price=500
// console.log(car1);
// delete car1['manufactoring']
// console.log(car1);




let car2={
    name:"Sonet",
    manufactoring:"Kia",
    fuelCapacity:45,
    isAutomatics:true
}
console.log(Object.freeze(car2));
car2.name="moto";
console.log(car2);
