let Arr = [1,2,3,4,5 , "delta", true , null , 45]
// console.log(Arr);
// console.log(Arr[4]);
// console.log(typeof Arr);

let newArr = new Array(1,23,95 ,69 ,2); 
newArr.push(98)
console.log(newArr);
// newArr.pop()
// console.log(newArr);

newArr.unshift("Bharat") // add the element at the start an Array
// console.log(newArr);
newArr.shift()
// console.log(newArr);

// console.log(newArr.includes(2));
// console.log(newArr.indexOf(69));

const newJoinArr = newArr.join()
console.log(newJoinArr);
console.log(typeof newJoinArr);


/* Slice And Splice  */

// Slice cuts the Array index value by giving 2 parameter and nothing changes in main Array

//Example for Slice
let okArr = [1,2,3,4,5,6,7];
console.log('A Main ARRAY', okArr);

let SliceArr= okArr.slice(1,3)
console.log('Sliced Arr', SliceArr)
console.log('B Main ARRAY', okArr);


// Splice cuts the Array Index value by giving 2 Parameters but it also changes the Main Array

// //Example for Splice
let SpliceArr = okArr.splice(1, 4)
console.log('Spliced Arr',SpliceArr);
console.log('C Main ARRAY' , okArr)



