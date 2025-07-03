function setUsername(username){

    this.username = username
    console.log("function call");
    
}

function createUser(username,email,password){
    setUsername.call(this,username) // this passed the context of thire to caller function

    this.email = email
    this.password = password
}

const newuser = new createUser("harsh","harsh@gmail.com",123456)
console.log(newuser);
