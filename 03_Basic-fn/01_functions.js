/* ----- Functions in Javascripts.  ----- */

// console.log("D");
// console.log("E");
// console.log("L");
// console.log("T");
// console.log("A");

// result : DELTA in 5lines

// ** what if we need 6 times so there comes Funtions a specific code store in the container whenever we call that will be Execute

function printMyname() {
  console.log("D");
  console.log("E");
  console.log("L");
  console.log("T");
  console.log("A");
}
// printMyname // if we call like this - means Reference (nothing print)
// printMyname() // if we call like this - means Fn Executes (print whatever inside the fn)
// printMyname()
// printMyname()
// printMyname() //now we can print as many as we want

// Example: 1

function addNumber(num1, num2) {
  //(a,b) ----> Parameters
  console.log(num1 + num2);
}
// addNumber(3,4) //----> passing Arguments
// addNumber(3,"o")
// addNumber(3, null)
//in this type of funtions Datatype manipulation probleam create but it can be handle

// Example: 2 We can Store the value in variable

/*  ----- Type 1 ------ */
// function addTwoNumber(num1 ,num2){
//     // console.log(num1 + num2);
// }
// const result  = addTwoNumber(3,4)
// console.log("Result: "result); // gives us undefined

/*  ----- Type 2 ------ */
function addTwoNumber(num1, num2) {
  //(a,b) ----> Parameters
  // let result = num1 +num2;
  // return result ;

  // console.log("ok prints"); //this won't print if written after return
  return num1 + num2;
  console.log("not print"); //this won't print if written after return
}
const result = addTwoNumber(3, 4);
// console.log("Result: ", result); // gives us 7/ or calculation ans return value

// Example: 3

function loggedInUser(username) {
  return `${username} is Logged in Successfully ,Welcome.`;
}
// loggedInUser("MikeCoder"); // not print because it exucated but not consoled
// console.log(loggedInUser("MikeCoder")); // Will Prints in console
// console.log(loggedInUser("")); // Will Prints other written string
// console.log(loggedInUser()); // Will Prints Undefined + further string

//Example: 4  Check if user is availber or not through if Else

function loginUser(username = "noUser") { // default if no arguments pass
  if (username === undefined) {
console.log(`Please enter a username `)
return
  }
  return `${username}, is logged in `
}

// console.log(loginUser("ok"))
// console.log(loginUser()) // please enter a username  + undefined


//Example: 5

/*  ----- Type :- 1 ------- */
// function calculateCartValues(num1){
//   return num1
// }
// console.log(calculateCartValues(3));

/*  ----- Type :- 2 ------- */
 // what if many value comes as Arguments  , Where Rest Operators
function calculateCartValues(...num1){
  return num1
}
// console.log(calculateCartValues(200 ,400, 50)); //giver a Array

/*  ----- Type :- 3 ------- */
function calculateCartValues(val1,val2,...num1){ // val1- 200 , val2- 400 reset is will goes to ...num1
  return num1
}
console.log(calculateCartValues(200 ,400, 50, 450)); //. [50,450]


/* Objects as Parameters */
const userDetails = {
  name : "delta",
  age: 24,
  email: "delta@gmail.com"
}

function handelObj(koibhiObj){
  console.log(`Username is ${koibhiObj.name} and age of user is ${koibhiObj.age}`);
}
// handelObj(userDetails)
handelObj({
  name: "logo",
  age: 50,
  email:"de"
})


/* Array as Parameters */

const myNewarr =[ 2, 200 ,400 ,100];

function myThirdValue(anyarr){
  return anyarr[2];
}
console.log(myThirdValue(myNewarr)); // 400