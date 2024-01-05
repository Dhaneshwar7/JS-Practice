/*  ----- For in Loop ----- */
/*  ----- For in Loop ----- */

// With ARRAY
const arr=[ 'js', "cpp", "rb", "swift", "java"];
for (const key in arr) {
    console.log(key); // it just give us index
}
for (const key in arr) {
    console.log(arr[key]); // this will print all the values
}


// With OBJECT
const langObject = {
    "js" : "Javascript",
    "cpp" : "C Plus Plus",
    "java" : "Java Language",
    "py": "Python",
    "rb": "Ruby",
}
for (const key in langObject) {
    console.log(`Key is ${key}`); // Key
}
for (const key in langObject) {
    console.log(`Value is ${langObject[key]}`); //Value 
}
for (const key in langObject) {
    console.log(`${key} Shortcut for ${langObject[key]}`); // both print 
}


// With Map Object

const map = new Map();
map.set('Alpha', '1')
map.set('Bravo', '2')
map.set('Charlie', '3')
console.log(map);

for (const key in map) {
  console.log(key);
  console.log(map[key]); // Not iterable 
}