// const arr = ["harsh",1,2,3,4]

// const myArr = arr.forEach( (item) => { // for each not not return any value
//     // console.log(item);

//     return item
    
// } )
// console.log(myArr);

const myNum = [1,2,3,4,5]

// const newNum = myNum.filter( (num) => num > 4)  //filter () returns aa value
// const newNum = myNum.filter( (num) => {
//    return num > 4
// })  // if use  {} bractes than need to write return  

//************************************
//  */
// const newNum = [] 

// myNum.forEach( (num) => { // enter new value from mynum to newNum
//     if (num > 4) {
//         newNum.push(num)
//     }
// } )
// console.log(newNum);

//************************************** */

const books = [
    {
        title: "book one",
        genre: "fiction"
    },
    {
        title: "book two",
        genre: "harsh"
    },
    {
        title: "book three",
        genre: "vivek"
    },
]
// const userBooks = books.filter( (bk) => bk.genre == "harsh" )
const userBooks = books.filter( (bk) => {
    return bk.genre == "harsh" && bk.title == "book two"
} )

console.log(userBooks);
