const user = {
    username: "harsh",
    login: 8,
    signedIn: true,

    getUser: function(){
        // console.log("get user database");
        console.log(`username ${this.username}`);
        console.log(this); // current contex
        
    }
}

// console.log(user.username);
// console.log(user.getUser());
// console.log(this);

// const promise1 = new Promise() // new keyword is a constructer 

function userName(username,loginCount,isLogged){
    this.username = username
    this.loginCount = loginCount
    this.isLogged = isLogged

    return this
}

const userOne = new  userName("harsh",5,true) // new keyword will give new instance of that funtion
const userTwo = new userName("harsh1",5,true)
console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
