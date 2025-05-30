const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // for float value limit
console.log(balance.toPrecision(3)); // return nummber as a string , limit is 1-21

const number = 1000000000
console.log(number.toLocaleString('en-IN')); // add comas "," in number //prameter is represent which contry type comma whant to include
