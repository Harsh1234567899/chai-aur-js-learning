const arr = ["harsh",1,2,3,4]

// arr.forEach( function (params) {
//     console.log(params);
    
// } )

// arr.forEach( (params) => {
//     console.log(params);
    
// } )
//****************************** */
function printMe(params){
    console.log(params);
    
}

// arr.forEach(printMe) // just give funtions reference not nedd to write ()

//************************************ */
// arr.forEach( (items,index,array) => {
//     console.log(items,index,array);
    
// })

const myArr = [
    {
        language: "javascript",
        name: "harsh"
    },
    {
        language: "python",
        name: "vivek"
    },
    {
        language: "java",
        name: "viraj"
    },
]

myArr.forEach( (items) => {
    console.log(items.language); // use to iterate array object 
    
} )