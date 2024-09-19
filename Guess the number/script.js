let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
let userInput = document.querySelector("#userInput");
const previousGuess = document.querySelector('#previousGuess')
const remainingGuess = document.querySelector('#remainingGuess')
const lowOrHi = document.querySelector('#lowOrHi')
const message = document.querySelector('#msg')
const restart = document.querySelector('#restart')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener( 'click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)

        console.log(`attempt  : ${numGuess}`);
        console.log(`guess    : ${guess}`);
        
        validateGuess(guess)
        // displayGuess(guess)
    })
}
else{
    endGame()
}

function validateGuess(guess){
  if(isNaN(guess)){
      alert("Please enter a valid number")
  }
  if( guess < 1 || guess > 100){
      alert("Please enter a valid number between 1 and 100")
  }
  else{
    if(numGuess === 11){
      displayGuess(guess)
      endGame()
    }
    else{
      checkGuess(guess)
  }
}
}

function checkGuess(guess) {
    if(guess === randomNum){
        displayMsg('You Won !')
    }
    else{
        if(guess < randomNum){
            displayMsg('Hint - Too Low !...Try again')
            displayGuess(guess)
        }
        else if(guess > randomNum){
            displayMsg('Hint - Too High !...Try again')
            displayGuess(guess)
        }
    }
}

function displayMsg(msg){
    message.innerHTML = msg
}

function displayGuess(guess) {
    userInput.value = ''

    prevGuess.push(guess)
    previousGuess.innerHTML = `${prevGuess} `

    numGuess++
    remainingGuess.innerHTML = `${11-numGuess}`
}

function endGame() {
    displayMsg(`Game Over ! <br> Answer = ${randomNum}`)
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    playGame = false
    newGame()
}

function newGame() {
    restart.addEventListener('click' , function(e){
        e.preventDefault()

        randomNum = parseInt(Math.random() * 100 + 1)
        userInput.innerHTML = ''
        userInput.removeAttribute('disabled')    
        displayMsg('')
        prevGuess = []
        numGuess = 1
        previousGuess.innerHTML = `${prevGuess} `
        remainingGuess.innerHTML = `${11 - numGuess}`
        
        playGame = true

    })
}
newGame();




