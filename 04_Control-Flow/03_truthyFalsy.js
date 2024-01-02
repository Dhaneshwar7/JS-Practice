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
