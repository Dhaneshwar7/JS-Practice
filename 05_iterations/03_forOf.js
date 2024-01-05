/*  ------- For Of Loop  ------- */
/*  ------- For Of Loop  ------- */
// With ARRAY
const arr = [1,2,23,4,2,2,543,2,9];
for (const arNum of arr) {
    // console.log(arNum);
}

const myFullName = "Delta Mike";
for (const nWord of myFullName) {
    // console.log(`Each char is ${nWord}`); 
}

// With MAP
/*  ---- Map --- with loop, Map can be iterable  */
const map = new Map();
map.set('Alpha', '1')
map.set('Bravo', '2')
map.set('Charlie', '3')

console.log(map);
console.log(map.get('Alpha')); //1 print value
console.log(map.size); //size or length

for (const mapKey of map) {
    console.log(mapKey);
}
for (const [mapKey,mapVal] of map) { //Destructuring of map's key & value
    console.log(mapKey ,":- ", mapVal);
}


// With OBJECTS
/*  ----- Objects ----- with Loop , object can't be iterable  */
const armyReg = {
    "Madra Regiment ": "1758",
    "Rajputan Rifles" : "1775",
    "Rajput Regiment" :"1778",
    "Dogra Regiment" : "1877",
    "Sikh Regiment ": "1846",
    "Jat Regiment" : "1795"
}
for (const regiments of armyReg) {
    // console.log(regiments); // Object key value is not iterable 
}