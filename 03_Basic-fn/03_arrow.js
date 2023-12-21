// this keywork used in an Object as object itself
const ekUser = {
    username: "Jeetu",
    email: "jeetu@gmail.com",
    messagePrint: function(){
        console.log(`${this.username} Welcome Sir to Our Project`);
    }
}
ekUser.messagePrint()
ekUser.username = "Barman";
ekUser.messagePrint();

 
// console.log(this); // empty object in node environment

/* Example --1 */
/*  Now,, this is give us undefined in any function when we try to use that with values but in browser in gives us Object */
const ekfn = function(){
    return this
}
// console.log(ekfn()) // in here we get Object [gloabal]


/* Example -- 2 */
const twofn = function(){
    let user = "ok"
    console.log(this.user); // undefined
    console.log(this); // Object[global ] in node env
}
// twofn()

/* Example -- 3 Same with ARROW FUNCTION */

const arrowFn = ()=>{
    let username= "kuch"
    console.log(this.username); // undefined
    console.log(this); // Empty object
}
// arrowFn()


/* Example of ARROW FUNTIONS */

/* 1 */
const nearrowFN= (number1 ,number2)=>{
    return number1 * number2
}
// console.log(nearrowFN(6,7)); //48


/* 2 */
const alagfn= (number1 ,number2)=> number1 * number2
// console.log(alagfn(3,4)); //12
 
/* 3 */
const chalfn= (number1 ,number2)=>( {lastname: "ok"}) //using parathesis if we want object in one line or if we return somthing then { } need
console.log(chalfn(3,4)); // Object { lastname : "ok"}


/* 4 */
const myArr = [2,3,4,5,66]
myArr.forEach( (e)=>console.log(e*2))
