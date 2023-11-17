// /* For Checking this do in Window (Ctrl+All then Ctrl+/) Line 81 */
// /* For Checking this do in Window (cmd+All then cmd+/) Line 81 */
// /* Simple one  */
// let score = 33;
// console.log(typeof score); //this will print Number
// console.log(typeof(score)); //this will print Number

// /* "34abd" */
// /* String value Converstion */
// let run = "50"; // this is String value but we can change this into Number
// let convertRun = Number(run); // this is conversion of any string into Number
// console.log(convertRun); // Print => 50
// console.log(typeof convertRun); // Print => number

// /* NAN => NOT A NUMBER */
// /* Complicate when String value Converstion if something like "5600dfjkj" or any */
// let userScore = "80bbc"
// let valueinNumber = Number(userScore) // this convert userScore in Number 
// console.log(typeof valueinNumber); //this is still showing that is converted to a number 
// console.log(valueinNumber); // NaN


// /* NULL null */
// /* What will happen with NULL */
// let check= null
// let valueCheck = Number(check) // print number
// console.log(typeof valueCheck); //  0
// console.log(valueCheck);


// /* Undefined */
// /* Let check what happen with Undefined */
// let unde = undefined
// let valueUnde = Number(unde);
// console.log(typeof valueUnde);  // print number
// console.log(valueUnde); // NaN


// /* Boolean True/False */
// /* Let check what happen with Boolean */
// let bool = false
// let valueBool = Number(bool);
// console.log(typeof valueBool);  // print number
// console.log(valueBool); // 1 depends of true , 0 false 



// /* Booloean Conversion */
// let islogedIN = "ok";
// let booleandIslogedin = Boolean(islogedIN);
// console.log(booleandIslogedin);

// /* String Conversion */
// let stringNum = 33 ;
// let valueStringNum = String(stringNum);
// console.log(valueStringNum);
// console.log(typeof valueStringNum);

// /* Conclusion */

// /* when converted in to Number */
// //  "33"    => 33
// // "33abd"  => NaN
// // true     => 1  , false => 0
// // undefine => NaN
// //  null    => 0

// /* when converted in to Boolean */
// // 1    => true
// // 0    => false
// // ""   => false
// // "ok" => true

// /* when converted in to String */
// // 1    => String 1
// // 0    => String 0 
// // ''   => 
// // "ok" => String ok
// // null => String null
// // NaN  => String NaN
// // Undefined =>  undefined is not defined

/* ********************    OPERATIONS    ******************************** */

let value = 5
let negValue = -value;
// console.log(negValue); // -5

// console.log(2 + 2);
// console.log(2-2);
// console.log(2/2);
// console.log(2 * 2);
// console.log(2**5); // power
// console.log(2%4);

let str1 = "hello"
let str2 = " Dhanesh"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log('1' + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(true);
// console.log(+true);
// console.log(+"");

// Bad Code 
// let num1 ,num2,num3;
// num1 =num2=num3 = 4 +4 ;

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);


/* Postfix Increment */
let x =5 
const y = x++;
console.log(x); //x increments value 
console.log(y); // y do'nt increments value in postfix

/* Prefix Increment */
let a =2
const b = ++a;
console.log(a); // a increments value 
console.log(b); // b increments value in prefix




// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// lint to study

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment