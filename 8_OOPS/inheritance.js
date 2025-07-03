class user{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(this.username);
        
    }
}
class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
    addCourse(){
        console.log(`a new course is ${this.username}`);
    }
}

const harsh = new teacher("harsh","harsh@gmail")
harsh.addCourse()
const tea = new user("harsh")
// tea.addCourse() // cant acces chiled node
tea.logme()
console.log(harsh instanceof teacher);
console.log(harsh instanceof user);
