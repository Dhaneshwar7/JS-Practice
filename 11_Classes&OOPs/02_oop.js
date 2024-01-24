/* ------ Object Literal ----- */
const User ={
    useraName :'Pintu',
    dob:"2000",
    isLoggedIn: true,
    getDetails : function(){
        // console.log("Object fuction done printed");
        console.log(`we cand se by this ok ${this.useraName +"  "+ this.isLoggedIn}`);
        console.log(this);
    }
}
console.log(User.useraName);
console.log(User.getDetails());
/* IN node environment  this gives us black object  */
/* IN Browser environment  this gives us WINDOW Object  */
console.log(this);
/* OBject LIteral Probleam : - if we want to make object for many we have to copy paste this many times */

/* ------ Constructor Function ----- */
function userD(username , isLoggedIn, address){
    this.username =  username;
    this.isLoggedIn = isLoggedIn;
    this.address =address;
    this.printGreet= function(){
        console.log(`ok printed Username ${this.username} and Address: ${this.address}`);
    }
    return this //Implictily define (not required but good to write)
}
/* In this Constructor funtion Probleam : - if we injected other user Details it override First One Details */
const userOne = userD("Delta" , true, "bpl")
const userTwo = userD("Mike" , false, "ind")
console.log(userOne)
console.log(userTwo);

/* So we use new **new** will create every time new context/instances for the user */
//LIke this
const userThree = new userD("Gourav" , true, "GandhiNagar")
const userFour = new userD("Pintu" , true, "Bg")
console.log(userThree);
console.log(userFour);
console.log(userFour.printGreet());
console.log(userFour.constructor); // Fuction : userD

//1 when we use *new new object create
//2 then constructor create it packs all the arguments inside the constructor
//3 the  all willl be injected inside *this



