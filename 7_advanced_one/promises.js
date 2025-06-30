// fetch('').then().catch().finally()
// const promise1 = new Promise( (resolve,reject) => {
//     // do an aync task
//     //DB calls , crypto , network
//     setTimeout(function(){
//         console.log("async taks is complete");
//         resolve()
//     },1000)
// } )

// promise1.then(function(){
//     console.log("promise consumed");

// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async taask two");
//         resolve()

//     }, 3000);
// }).then(function(){
//     console.log("async two");

// })

// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "harsh",age: 21})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);

// })

// const promise4 = new Promise((resolve, reject) => {
// setTimeout(function(){
//     let error = false // ture or false
//     if(!error){
//         resolve({username: "harsh",age: 21})
//     }else{
//         reject("error")
//     }
// },1000)
// })
// // cant store in variable to use it will give a error
// promise4.then((user)=>{
//     console.log(user);
//     return user.username

// }).then((username)=>{
//     console.log(username);

// }).catch((e)=>{
//     console.log(e);

// }).finally(()=>{
//     console.log("finally");

// })

// async and await cant directly handel error********************
// const promise5 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//         let error = false // ture or false
//         if(!error){
//             resolve({username: "javascript",age: 21})
//         }else{
//             reject("error in js")
//         }
//     },1000)
// })
// async function consumePromise5() {
//    const response = await promise5 
//    console.log(response);

// }
// consumePromise5()


// const promise5 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//         let error = true // ture or false
//         if(!error){
//             resolve({username: "javascript",age: 21})
//         }else{
//             reject("error in js")
//         }
//     },1000)
// })
// async function consumePromise5() {
//    try{
//     const response = await promise5 
//    console.log(response);
//    }
//    catch(error){
//     console.log(error);    
//    }   
// }
// consumePromise5()

//******************************** */
// async function databaseDemo(params) {
//     try {
//         const url = await fetch('https://api.github.com/users/Harsh1234567899')        
//         const data = await url.json() // respone come late so json is also need to await
//         console.log(data);
//     }
//     catch(e){
//         console.log(e);        
//     }
// }
// databaseDemo()

fetch('https://randomuser.me/api/').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((e)=>{
    console.log(e);
    
}).finally(()=>{
    console.log("hello");
    
})