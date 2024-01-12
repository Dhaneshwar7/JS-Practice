/*. ------- Map ----  */
// like name says Calculation or want make changes with values
const okNumbers = [1,2,3,4,5,6,7,8,9,22];

let mapResult = okNumbers.map((ok)=> (ok +5));
 mapResult = okNumbers.map((ok)=> (ok +5)).map((ok)=> ok*5).filter((ok)=> ok>50);
console.log(mapResult);


/*  ------- Reduce  -------- */
const calcu= [ 1 ,2,3,4,5,6,7,8]
const calTotal = calcu.reduce(function (acc, curVal){
    console.log(`acc: ${acc} and curVal ${curVal}`);
    return acc + curVal;
},0)
console.log(calTotal);

const cal= calcu.reduce((acc,cur)=>(acc+cur),0)
console.log(`Calcution arr: ${cal}`);


/* ------- Cart value Calcuation with Reduce method -----  */

const carts = [ 
    {course : "js", value: 599},
    {course : "python", value: 99},
    {course : "chatgpt", value: 109},
    {course : "nodejs", value: 100},
];

const cartTotal = carts.reduce((acc ,cartItem)=> (acc + cartItem.value),0)
console.log(cartTotal);