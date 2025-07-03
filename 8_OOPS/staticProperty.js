class user {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(this.username);
        
    }
    static Id(){
        return "123"
    }
}
const harsh = new user("harsh Pankhaniya")
// console.log(harsh.Id())

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const phone = new teacher("IQOO","phone@gmail")
phone.logme();
// console.log(phone.Id())
console.log(user.Id());

