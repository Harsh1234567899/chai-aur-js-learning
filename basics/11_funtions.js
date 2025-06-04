// function myFun(num1 , num2){
//     console.log(num1 + num2)
// }

// const mera = myFun(5,6) // direct print console of funtion dont wait for variable print

// function cart(...num1){ // using spread operator we can accept argument infinite
//     return num1
// }
// console.log(cart(100,200,300)); // but value come in arrays formate

//********************************************** 
const user = {
    username: "harsh",
    price: 200
}

function myCart(anyObject){
    console.log(`userrname is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// myCart(user)
// myCart({  // direct add aa object
//     username: "pankhaniya",
//     price: 200
// })

const myArr = [100 , 200 , 400]

function myArrayFunction(num1){
    return num1[1]
}
console.log(myArrayFunction(myArr));
console.log(myArrayFunction([500,600,700]));//passing array in arrgument
