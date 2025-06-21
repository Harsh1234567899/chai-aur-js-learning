// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')
const clock2 = document.getElementById('clock2')


setInterval(function dateAndTime() {
    let date = new Date()

    clock.innerText = date.toLocaleTimeString()
    clock2.innerText = date.toDateString()

}, 1000)