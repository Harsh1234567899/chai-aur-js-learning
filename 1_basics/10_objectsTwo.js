// const myObj = {} // object literals

const myObj = new Object() //singleton object 

myObj.Id = "123abc"
myObj.name = "harsh"
myObj.isLoggedIn = false

// console.log(myObj);

const regularUser = {
    email: "harsh@gmail.com",
    Fullname: {
        userName: {
            firstName: "harsh",
            lastName: "pankhaniya"
        }
    }
}

// console.log(regularUser.Fullname.userName.firstName);

//concet objects ******************

// const obj3 = {myObj, regularUser} // not work proprerly
// const obj3 = Object.assign({},myObj,regularUser) //{}, copy other object in {}
// const obj3 = {...myObj,...regularUser} // spred operater
// console.log(obj3);

// array object ***************
const users = [
    {
        name: "harsh",
        age: 21
    },
    {
        name: "harsh",
        age: 21
    },
    {
        name: "harsh",
        age: 21
    }
]
// console.log(users[1].name)

// console.log(Object.keys(myObj)); // return keys and values in arrays
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));

// console.log(myObj.hasOwnProperty('isLoggedIn')); // ASKING THIS PROPERTY IS THERE OR NOT


// destructing ***********************
// use to destruct any key value and use 
const myCar = {
    name: "BMW",
    price: "50,000",
    colour: "black"
}
const {colour} = myCar  // destructing declear methods
const {colour: clr} = myCar // give another name to value "clr"
console.log(colour);
console.log(clr);
console.log(myCar);

