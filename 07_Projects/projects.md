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


