let myDate= new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let createdDate = new Date(2023 , 2 ,12);
// console.log(createdDate);
// console.log(createdDate.toDateString());

// let creatednewDate = new Date(2023, 2, 12, 12,5);
let creatednewDate = new Date("2014-03-30");
// console.log(creatednewDate.toLocaleString());

let myNewStamp = Date.now();
// console.log(myNewStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate);
console.log(Date.now());

console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(creatednewDate.getDay());


// String Polation using in time Date
console.log(`${new Date()} and the time`)

let ok = newDate.toLocaleString("default", {
    weekday: 'short',
    
})
console.log(ok);