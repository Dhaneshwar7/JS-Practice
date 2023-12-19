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
    console.log(a);
}
c = 700;
const b = 10001

let ab =610000;
const score  = 450;
console.log(a);
console.log(b);
console.log(c); 
console.log(ab);  // let variable will print becuse it is in Global Scope
console.log(score); // Const vaiable will print because it is in Global Scope


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // on loops that why mostly use let var which can only be access in Block Scope
}