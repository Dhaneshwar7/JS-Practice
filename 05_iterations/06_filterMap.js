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