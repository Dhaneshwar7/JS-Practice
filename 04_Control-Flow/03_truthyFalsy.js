const userEmail = 'delta@ai';

if (userEmail) {
	console.log('User is online');
}

/* FALSY VALUES */
// false , "" , 0 , -0 , Bigint 0n , null ,undefined , NaN

/* TRUTHY VALUES */
//true , " " , "0" , [],{}, function (){}

const arr = [];
const obj = {};
// Check with Array
if (arr.length === 0) {
	console.log('yaa array is Blank');
}

if (Object.keys(obj).length === 0) {
	console.log('yaa Objaect is Blank');
} else {
	console.log('yaa Objaect is Not-Blank');
}

/* Nullish Coelescing Operation ?? : null undefined  */

let value;
// value = 5 ?? 10;    //-> 5
// value = null ?? 10;  //->  10
// value = undefined ?? 15;   //-> 15
value = null?? 10 ??20;    //-> 10first value after null
console.log(value);


/* -- Ternary Operator ? short hand for if else */

// condition ? true : false ;
let marks =25;
marks <=33 ? console.log("You are FAIl") : console.log('YOu are Passed the Exam');