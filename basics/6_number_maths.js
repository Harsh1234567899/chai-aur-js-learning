// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // for float value limit
// console.log(balance.toPrecision(3)); // return nummber as a string , limit is 1-21

// const number = 1000000000
// console.log(number.toLocaleString('en-IN')); // add comas "," in number //prameter is represent which contry type comma whant to include

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4,6,7,8));
console.log(Math.max(4,6,7,8));

console.log(Math.random());  // give random number between 0 and 1
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);  

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 10) 