class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase() // get give data to other in screen in different way
    } // every time we need to declare uniqe type variabel other wise rase condition is rise
    set email(value){
        this._email = value // example set store data in databse as it is
    }

    get password(){ // get return aa value 
        return `${this._password.toUpperCase()} this password is encrypt`
    }
    set password(value){
        this._password = value
    }
}

const harsh = new user("harsh@gmail.com","abc")
console.log(harsh.email);
console.log(harsh.password);

