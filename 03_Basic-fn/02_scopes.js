let x= 30;
const y= 40;
var z = 88;
// console.log(x);
// console.log(y);
// console.log(z);
/* this will definetely print no probleam because they in Global Scope */


/* What is Scope {} */
// Except in Object this type of curlyBraces {} if we use in functions / if else that is Called Scope
// if no scope will be use outside spreaded like line number 1-6 those are in Global Scope


var c = 500;
let a = 450;
if(true){
    let a= 300; // this Let variable will not be Print its is in Block Scope
    const b= 1000; // this Const variable will not be Print its is in Block Scope
    var c = 1;  // this VAR variable will Print  because it this variable works on Global scope 
    // console.log(a);
}
c = 700;
const b = 10001

let ab =610000;
const score  = 450;
// console.log(a);
// console.log(b);
// console.log(c); 
// console.log(ab);  // let variable will print becuse it is in Global Scope
// console.log(score); // Const vaiable will print because it is in Global Scope


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // on loops that why mostly use let var which can only be access in Block Scope
// }

/* ---------- Scopes & MIni Hoisting part2  ------ */

/* ----- with Example in FUNTIONS ----  */
function badelog(){
    const company = "sherCoders";

    function chotelog(){
        const chotibaate = "yahi tak simat rahene wale"
        console.log(`chote logo ne bahar walo ka icecream khha liay jai ye company ka name :-${company}`);
    }
    // console.log(chotibaate); // ye nahi le paaye kyuki ye badelogo me hai
    chotelog()
}
// badelog();
// Underestand with Icecream mangne ka concept chotelog maang let hai besharmo ki tarh bade log nahi mangte shramte hai wali baat types


/* ----- with Example in IF /ELSE ----  */

if(true){
    const  company = "AlphaCoders";

    if(company ==="AlphaCoders"){
        const chotibaate = " Zindabaad"
        // console.log(company + chotibaate); // chote hai to kahi ka bhi le lenge
    }
    // console.log(chotibaate); //because ye bade ke sath me hai

}

/* +++++++++++ Instersting but in short later in upcoming sectio will dicuss */

/* types of funtions */
//Function Declaration
// function addOne(num){
//     return num +1;
// }

// Function Expression
// const addTwo = function(num){
//     return num +2
// }

// Function its have own name
// const addTwo = function aisabhihosaktahai(num , num2){
//     return num + num2
// }

// Function Expression
// const addTwo = (num)=>  num + 2 ;
// console.log(addTwo(3))


/* ---- Understanding with Functions  */


// Function Declaration

console.log(addOne(5)) // this will be print before intialization
function addOne(num){
    return num +1;
}

// Function Expression

// addTwo(4) // will not print
const addTwo = function(num){
    return num +2
}
