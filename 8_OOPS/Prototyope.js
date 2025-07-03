// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.length);
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){  // create a new method that can use by any
    console.log(`harsh is present in all objects`);
}

Array.prototype.heyHarsh = function(){
    console.log(`harsh says hello`);
}

// heroPower.harsh()
// myHeros.harsh()
// myHeros.heyHarsh() // object method can run on any beacuase ervery thing in js is object 
// heroPower.heyHarsh()


// inheritance

const User = {
    name: "harsh",
    email: "chai@google.com"
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()