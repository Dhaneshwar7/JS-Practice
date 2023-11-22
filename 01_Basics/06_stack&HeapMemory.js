
/*  Stack memory Used in (Primitive Datatype) which gives us the Copy if make changes , */
/*   It does't change it original Value */ 
// ---------  Stack Memory  (PRIMITIVE DATATYPES)------------
// Example //

let myRealName= "DhaneshwarMarskole"
let myNickName = myRealName;
myNickName = "DeltaMike";

console.log(myRealName);
console.log(myNickName);

/*  Heap memory Used in  (NON-Primitive Datatype) which gives us the Reference if make changes , */ 
/*   Change Happen in original Value */ 
// ---------  Heap Memory  (NON-PRIMITIVE DATATYPES) -------------
// Example //

let userOne = {
	email: 'Ekbanda@google.com',
	upi: 'ekUse@upi.com',
};

let userTwo = userOne;
userTwo.email = 'EkChangedBanda@google.com';
console.log(userOne);
console.log(userTwo);
