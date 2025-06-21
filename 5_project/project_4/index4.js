// const userInput = parseInt(document.querySelector('#guessField').value)
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')
let randomNumber = parseInt(Math.random() * 100 + 1)
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        // const guess = userInput // my this code not working beacuase userinput taking empty value when page load 
        const guess = parseInt(userInput.value)
        // console.log(guess);

        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // validations check
    if (isNaN(guess) || guess <= 0 || guess > 100) {
        userInput.value = ''
        alert('please enter valid number')
    } else {
        prevGuess.push(guess)
        if (numGuess > 10) {
            displayGuess(guess)
            displayMessage(`game over . random number is ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    // msg printing
    if(guess === randomNumber){
        displayMessage(`you guessed right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`number is to low`)
    }else if(guess > randomNumber){
        displayMessage(`number is to low`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guesses.innerText += `${guess},`
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`

}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guesses.innerText = ''
        lastResult.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        lowOrHi.innerText = ''
        playGame = true
    })

}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newgame">start new game</h2>'
    resultParas.appendChild(p)
    playGame = false
    newGame()
}