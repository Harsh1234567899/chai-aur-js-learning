// singleton
// Object.create

// object literals

const mysym = Symbol("key1")  // creating symbol

const myobj = {
    name: "harsh",
    'fullName': "pankhaniya harsh", // another way to create keys ,output is same
    [mysym] : "mykey1", // right way to use symbol
    age: 22,
    location: "rajkot",
    email: "harsh@gmail",
    isLoggedIn: false,
    lastLoggedIn: ["mon","tus"]
}
// ways to acces object values
// console.log(myobj.fullName);
// console.log(myobj["name"]);
// console.log(myobj[mysym]); // for acces symbol

Object.freeze(myobj) // use to freeze object so value cant change 
console.log(myobj);
