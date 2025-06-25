// genrate colour
const randomCour = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let interval
const startChange = function(){
    if(!interval){
        interval = setInterval(change,2000)
    }
    function change(){document.body.style.backgroundColor = randomCour()}
}
const stopChange = function(){
    clearInterval(interval)
    interval = null
}

const start = document.querySelector('#start').addEventListener('click',startChange)
const stop = document.querySelector('#stop').addEventListener('click',stopChange)

