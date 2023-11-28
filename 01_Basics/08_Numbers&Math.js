const score = 600;
// console.log(score);
// console.log(typeof(score));

const newScore = new Number(500283.939)
// console.log(newScore);
// console.log(typeof(newScore));
// console.log(newScore.toString().length); // lenght of NUmber Digits
// console.log(newScore.toFixed(1)); // only show 1 digit after a Decimal

const otherNum = 1139.3993;
console.log(otherNum.toPrecision(4));

const balance = 20000000;
console.log(balance.toLocaleString('en-IN')); // Convert to Readable for Indians

/*   ================ MATH ==================== */

// console.log(Math.PI);
// console.log(Math.abs(-9)); // only conver Negative values to Positive
// console.log(Math.round(4.4)); // Gives us nearest Value
// console.log(Math.ceil(8.2)); // Gives us smallest Value greater than or equal to value
// console.log(Math.floor(9.3939));
// console.log(Math.min(4,37,9,2,4,67,89));
// console.log(Math.max(4,37,9,2,4,67,89));


/*  Mostly used method from MATH */

console.log(Math.random()); // 0.xyzabcdef create random number
console.log(Math.random()*10); // x.xyzabc  random number
console.log(Math.floor(Math.random()*10)); // first eliminate values after decimal then x.xyzabc  random number
console.log(Math.floor(Math.random()*10) + 1); // +1 help to never see Zero value(0)

const min = 20;
const max = 30;

console.log(Math.floor(Math.random()*(max-min +1))+ min);
