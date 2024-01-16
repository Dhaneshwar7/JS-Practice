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
