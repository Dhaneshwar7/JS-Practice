/*. ------- Map ----  */
// like name says Calculation or want make changes with values
const okNumbers = [1,2,3,4,5,6,7,8,9,22,];

let mapResult = okNumbers.map((ok)=> (ok +5));
 mapResult = okNumbers.map((ok)=> (ok +5)).map((ok)=> ok*5).filter((ok)=> ok>50);
console.log(mapResult);

