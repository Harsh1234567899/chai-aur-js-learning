// const arr = {
//         name: "harsh",
//         age: 21
// }

// for (const key in arr) {
//     console.log(`${key} and values are ${arr[key]}`);
    
// }

// for in not work directly in array***************

// const arr = ["harsh",1,2,3,4]
// for (const key in arr) {
//     console.log(arr[key]);
    
// }

const newMap = new Map() // map keys all ways require brakets ""
newMap.set("name","harsh")
newMap.set("age",21)

for (const key in newMap) { // not work
    console.log(key);
    
}