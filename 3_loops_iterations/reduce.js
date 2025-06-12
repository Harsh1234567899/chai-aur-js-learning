const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce(function (acc, curent){ // acc = accumulator
//     console.log(acc);
    
//     return acc + curent
// },0)
// const myTotal = myNum.reduce( (acc, curent) => { // with arrow funtion
//     console.log(acc);
    
//     return acc + curent
// },0)
// console.log(myTotal);

const cart = [
    {
        name: "harsh",
        price: 500
    },
    {
        name: "vivek",
        price: 500
    },
    {
        name: "viraj",
        price: 500
    },
]

const cartTotal = cart.reduce( (acc,item) => acc + item.price , 0)
console.log(cartTotal);
