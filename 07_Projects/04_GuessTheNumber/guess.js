let randomNumber = parseInt(Math.random()*100 +1)

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const LowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

console.log(userInput);
console.log(submit);
console.log(remaining);
console.log(LowOrHigh);
console.log(startOver);


let restartBtn = document.createElement('button')
let prevGuess = [];
let numberOfGuess = 1;
let playGame = true

if(playGame){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)

    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please Enter a Valid Number`)
    }else if(guess <1){
        alert(`Please Enter More than Number 1`)
    }else if(guess>100){
        alert(`Please Enter Less than Number 100`)
    }else{
        prevGuess.push(guess);
        if(numberOfGuess===11){
        clearGuess(guess)
        displayMessage(`Game is Over . Random Number Was ${randomNumber}`)
        endGame()
        }else{
            clearGuess(guess);
            checkGuess(guess)
        }

    }


}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You Guessed it Right`)
        endGame();
    }else if( guess<randomNumber){
        displayMessage(`You Guessed Too Low`);
    }else if( guess>randomNumber){
        displayMessage(`You Guessed Too High`);
    }
    
}
function clearGuess(guess){
    userInput.value='';
    guessesSlot.innerHTML+=`${guess}`;
    numberOfGuess++;
    remaining.innerHTML =`${11- numberOfGuess}`
}
function displayMessage(msg){
    LowOrHigh.innerHTML=`<h3>${msg}</h3>`
    
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','');
    restartBtn.classList.add("button");
    restartBtn.innerHTML = `<h2 id=""newGame>Start New Game</h2>`
    startOver.appendChild(restartBtn);
    playGame =false;
    newGame()
    
    
}
function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click",()=>{
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numberOfGuess =1;
        guessesSlot.innerHTML='';
        remaining.innerHTML=`${11- numberOfGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(restartBtn);
        playGame=true

    })
    
}
