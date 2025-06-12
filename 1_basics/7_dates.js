let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// let myDate1 = new Date(2004,7,16)
// let myDate1 = new Date(2004,7,16,5,3)
let myDate1 = new Date("2004-08-16")
// console.log(myDate1.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",

})