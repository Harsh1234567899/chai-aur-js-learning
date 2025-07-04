const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 4
// console.log(Math.PI);

// const myObject = Object.create(null)
const chai = {
    name: "cold chai",
    price: 250,
    isAvailable: true,

    orderchai(){
        console.log("this is wrongg way ");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{ // use when other will access over object but we want that anybudy cant change of do anything in my code
    writable: false, 
    enumerable: false
}) // or this is like static function other cant change value but in this other cant loop of do aynthing with this method
// use when other wants to use over databse or api
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)) { // name property cant go in loop
    if (typeof value  !== 'function') {
        
        console.log(`${key} , ${value}`);
    }
    
}