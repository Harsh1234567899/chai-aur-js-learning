// ES6 

class user {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password} this is your password`
    }
    changeUser(){
        return`${this.username.toUpperCase()}`
    }
}
const newUser = new user("harsh","harsh@gmail","123456")
// console.log(newUser.encryptPassword());
// console.log(newUser.changeUser());


// behind the scene

function user2(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

user2.prototype.encryptPassword = function(){
    return `${this.password} this is your password`
}
user2.prototype.changeUser = function(){
    return`${this.username.toUpperCase()}`
}

const newUser2 = new user2("harsh2","harsh2@gmail","123456")
console.log(newUser2.encryptPassword());
console.log(newUser2.changeUser());