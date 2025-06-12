const myNum = [1,2,3,4,5]

// const add = myNum.map( (num) => num + 10 )

// chaining
const add = myNum.map( (num) => num *10 ).map( (num) => num + 1 ).filter( (num) => num >= 30)
console.log(add);
