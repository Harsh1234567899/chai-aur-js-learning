//immediately invoked funtions expression (IIFE)

(function harsh (){
    // named IIFE
    console.log(`databse connected`);
    
})(); //use for gobal variable polutions problem 
// use ";"if we want to create another IIFE funtion
( () => {
   // simple IIFE or arrow IIFE 
    console.log(`db connectedv 2`);
    
} )();
// with argument 
( (name) => {
    console.log(`db connectedv 2 ${name}`);
    
} )("harsh")