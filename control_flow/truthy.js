// const userEmail = "harsh@gmail.com"
const userEmail = []

// if (userEmail) {
//     console.log("yesh you have maill");
    
// }else{
//     console.log("you don't have maill");
    
// }

/*falsy values 
false , 0 , -0 , BigInt 0n , "", null , undefined , NaN*/

/* truthy values
true , 
"0" inside zero is true,
 "false",
 " " empty string with space,
 [],
 {},
 funtion(){},
 false == 0,
 false == "",
 0 == ""
  */


//  if (userEmail.length === 0) {
//     console.log("aray is empty");
        
//  }

const emptyObject = {}

if (Object.keys(emptyObject.length === 0)) { // keys() give all keys in aray so we can check by length
    console.log("objecrt is empty");
    
}

// ?? nullish coalescing operator  : null  and undefined
// use iin database 
let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 

console.log(val1);


/// terniary operater 

// condition ? true : false

const price = 100
price <= 80 ? console.log("terniary operater") : console.log("terniary operater 2");
