const user = {
    _email: "harsh@gmail",
    _password: "abc",

    get email(){
        return this._email.toLocaleUpperCase()
    },
    set email(vallue){
        this._email = value
    }
}
const tea = Object.create(user)
console.log(tea.email); // email is now mwthod but get and set not convert in method 
