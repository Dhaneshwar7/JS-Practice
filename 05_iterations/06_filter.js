/*  ---- Filter ----- */


const numberss = [1,2,3,4,5,6,7,8,9,10,12];
// arrow function way
const filNumbers = numberss.filter((num)=>{
    return  num >4
})
console.log(filNumbers);

// arrow function short hand way
const shorNUmbers = numberss.filter((num)=>(num>8))
console.log(shorNUmbers);


// how to print Array values with ForEach

const newArr= []


numberss.forEach((num)=>{
    if(num >5){
    newArr.push(num)
    }
})
console.log(newArr);

const regOjects= [{ regimentName: "Madras Regiment", regimentEstablishment: "1758" },
{ regimentName: "Rajputa Regiment", regimentEstablishment: "1775" },
{ regimentName: "Rajput Regiment", regimentEstablishment: "1778" },
{ regimentName: "Dogra Regiment", regimentEstablishment: "1877" },
{ regimentName: "Sikh Regiment", regimentEstablishment: "1846" },
{ regimentName: "Jat Regiment", regimentEstablishment: "1795" }]

let filObj = regOjects.filter((reg)=>{
    // return reg.regimentEstablishment >1800; // entries
})
filObj = regOjects.filter((reg)=>{
    return reg.regimentName.includes("Sikh") // 1 entry
})
filObj = regOjects.filter((reg)=>{
    return reg.regimentName.includes("Regiment") && reg.regimentEstablishment<1800 //4 Entries
})
console.log(filObj);

