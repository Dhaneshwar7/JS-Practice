const govt_jobs= [ "UPSC", "ARMED FORCES", "PARAMILTARY FORCES", "RAILWAY", "POLICE"];
const it_jobs= [ "MERN", "DSA", "CONTENT WRITING", "HR", "DEVOPS"];

// Push method just pushes the Array format inside of it
// govt_jobs.push(it_jobs)
// console.log(govt_jobs);
// console.log(govt_jobs[5][2]); // CONTENT WRITING

const allJobs = govt_jobs.concat(it_jobs)
// console.log(allJobs);
// Concat method add all the element off Array and store in new variable .


// Spread Operator  Very important
const newSpreadJobs = [...govt_jobs , ...it_jobs];
// console.log(newSpreadJobs);

//Flat method return new array where it give all the element of array inside off Array 
const arrayKeAndarArr = [12,23,4,5,8,[50,true,300,23,6], 67,69,[23,45,[4,5,6],7],"ok", ];
const newArrysorted = arrayKeAndarArr.flat(Infinity); //flat(number'1'/Infinity)
console.log(arrayKeAndarArr);
console.log(newArrysorted);

//Question is it ARRay

const ok = "Delta mike"
console.log(Array.isArray(ok));
console.log(Array.from("hello")); //store all letter in the Array

console.log(Array.from({name:"ok"})) // INteresting


//of method use to combine all the variable into in ARRAY

const scrore1 = 100;
const scrore2 = 10;
const scrore3 = 550;

const allScore = Array.of(scrore1,scrore2,scrore3)
console.log(allScore);