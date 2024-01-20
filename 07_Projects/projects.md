## Project 01  - Color Changer Bg

```javascript
const main = document.querySelector(".main");
        const boxes = document.querySelectorAll(".box")

        boxes.forEach((eachbox)=>{
            eachbox.addEventListener("click",(e)=>{
                console.log(e.target);
                console.log(e.target.id);
               let pr =  setInterval(()=> {
                eachbox.innerHTML = `<span style="color:black;">Clicked</span>`
               },20)
               setTimeout(()=>{ 
                eachbox.innerHTML =``
                 clearInterval(pr)
                },500)
                main.style.backgroundColor = e.target.id

            })

        })
```

## Project 02  - BMI Calculator

```javascript
const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const result =document.querySelector("#results")
const resultConc =document.querySelector("#result-conclusion")
console.log(height);

if(height ===''|| height<0||isNaN(height)){
    result.innerHTML =`Please give valid height ${height}`
}else if(weight ===''|| weight < 0|| isNaN(weight)){
    result.innerHTML =`Please give valid weigh  ${weight}`
}
else{
    const bmi = (weight / (height * height/10000)).toFixed(2)
    result.innerHTML =`${bmi}`

    if(bmi<18.6){
        let over = (bmi - 24.9).toFixed(2)
        resultConc.innerHTML=`UnderWeight :- ${over} Kg`
    }else if(bmi>24.9){
        let over = (bmi - 24.9).toFixed(2)
        resultConc.innerHTML=`OverWeight:- ${over} KG`;
    }
    else if(bmi>18.6 ||bmi<=24.9){
        let over = (bmi - 24.9).toFixed(2)
        resultConc.innerHTML=`Normal :- ${over} Kg`
    }
}
})
```
## Project 03  - Digital Clock

```javascript
const clock = document.getElementById("clock")

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString);
    clock.innerHTML =date.toLocaleTimeString();
},1000)
```

## Project 04  - Guess The Number
```javascript
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

```

