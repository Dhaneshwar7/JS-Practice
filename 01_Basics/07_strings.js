const name  = "Delta"
const projects = 50;

// Concatenation
console.log(name  + projects + " Value");

// String Interpolation 
function userDetail(fname , lname , country){
    return `My name is ${fname} ${lname}. I am from ${country} `
}
console.log(userDetail("Delta" , "Mike" , "India"));

// String Object

let myName = new String('Deltamike')
console.log(myName);
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.charAt(4));
console.log(myName.indexOf('e'));
console.log(myName.substring());


/* Method of String 
 */
let myTwoName = new String('DivyaprakashPal');

let inpmyTwoName = myTwoName.substring(0,4)
let newSlice = myTwoName.slice(3 ,-7)
console.log(inpmyTwoName)
console.log(newSlice);

let newSpace = "      hello.  "
console.log(newSpace);
console.log(newSpace.trim());

/*
substring()
s
charAt

  */
