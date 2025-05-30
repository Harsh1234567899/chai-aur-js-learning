// primitive 
// primitivee data is give a copy of a data not a refrence of memory location 

// String , Number , Boolean , null , undefined , Symbol , BigInt 


// non primitive / reference 

// array , Object , functions

// **************************************************

//stack (primitive), heap (non primitive)

// stack 

let myCar  = "M4"
let myCarModel = myCar
console.log(myCar);

myCarModel = "M5"
console.log(myCarModel);

// heap 

let userOne = {
    name: "harsh",
    age: 21
}
let userTwo = userOne

userTwo.age = 22

// console.log(userOne);
// console.log(userTwo);

let myArr1 = ["harsh", 22]
let myArr2 = myArr1

myArr2 = ["harsh", 21]

console.log(myArr1);
console.log(myArr2);  // array is non primitive but work like stack primitive type give aa copy to another variable

