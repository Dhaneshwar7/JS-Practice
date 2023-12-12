//Singleton ----- Constructor
// Object.create


//Objects Literals

const mySym = Symbol("nayakey1");

const User = {
    name : "Delta",
    "full name" :"Delat mike",
    [mySym] :"meraObjkey",
    age : "24",
    Location: "Bhopal",
    email:"deltamike@gmail.com",
    isLoggedInd: true,
    isLastLoggedIn:["Mondya" , "Friday"]
}


console.log(User);
// console.log(User.email);
// console.log(User["email"]); //[] squre notation

// console.log(User.full name );// not working 
// console.log(User["full name"]);

// console.log(User.mySym); 
// console.log(User[mySym]);
// console.log(typeof User[mySym]);

// Freezing the Object// nochange when you freeze th object
// Object.freeze(User)

// Changes value // override 

User.email = "mikedelta@gmail.com"
// console.log(User);

// Function in Objects

User.okfn = function(){
    console.log("hello OkFn runn");
}

User.okfnTwo = function(){
    console.log(`hello user ${this.email}`);
}

console.log(User);
console.log(User.okfn());
console.log(User.okfnTwo());