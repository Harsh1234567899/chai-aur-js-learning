const myarr = [0,1,2,3,4,5]
const mycar = new Array(1,"BMW",8,"oddi")
// myarr.push(6) // add value not index
// console.log(myarr);
// myarr.pop() // delete last value not particuler value
// console.log(myarr);

// console.log(myarr.includes(3));
// console.log(myarr.indexOf(3));


// const myarr2 = myarr.join()
// console.log(myarr);
// console.log(myarr2);
// console.log(typeof myarr2); // join() copy one arr in another but in string formate 

// slice or splice  ********

// console.log("a ",myarr);
// const myarr3 = myarr.slice(1,3) // return aa index value that give in array, not remove from array
// console.log("b ",myarr3);
// const myarr4 = myarr.splice(1,3) // return aa index value but also re3move from array 
// console.log("c ",myarr4);
// console.log("d ",myarr);

// array concatination ***********************

// myarr.push(mycar) // add array into array not values of second array
// console.log(myarr);

// const mergeArr = myarr.concat(mycar)  // when use concat() nedd to store in new variable
// console.log(mergeArr); // combine two array and return new

// const mergeArr2 = [...myarr,...mycar] // same as concat
// console.log(mergeArr2);

// const arr4 = [5,6,[1,2,3],9,[5,5,[4,6]]]
// const arr5 = arr4.flat(Infinity) //flat is use to combine array into array
// console.log(arr5);

let mytName = "Pankhaniya Harsh"
console.log(Array.from("harsh")); // from() convert anything in array
console.log(Array.from(mytName)); 

const score1 = 100
const score2 = 200
console.log(Array.of(score1,score2));  //of() is combine multiple variable value in array
