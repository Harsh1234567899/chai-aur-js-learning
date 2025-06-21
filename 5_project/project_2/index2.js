const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // if we declare height and weight before event of outer funtion than when page load it will direct store value empty 
    // inside declaration helps that when user click on button than and than only thay will take value and store inside
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(isNaN(height) || height <= 0 ) {
        result.innerText = 'please give a valid hight';
    }else if(isNaN(weight) || weight <= 0 ) {
        result.innerText = "please give a valid weigth"
    }else {
       const ibm = (weight/((height*height)/10000)).toFixed(2)
       result.innerHTML = ibm
    }
})
