const user = {
    userName: "harsh",
    price: 200,

    welcomeMessage: function(){
        console.log(`${this.userName} welcomme to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage();
// user.userName = "pankhaniya"
// user.welcomeMessage();

// console.log(this); // this give empty object if any value not give in global

// function arrow(){
//     let username = "harsh"
//     console.log(this.username);
    
// }
// arrow() // in this , this will give all funtionality

// const chai = function arrow(){
//     let username = "harsh"
//     console.log(this.username);
    
// }
// chai()

// this cant work in arrow funtions 

// const chai = ()=>{
//     let username = "harsh"
//     console.log(this.username);
    
// }
// chai()

const chai = (num1,num2) => num1 + num2 //implicit return (one line function) , not need to write return 

console.log(chai(2,3))
