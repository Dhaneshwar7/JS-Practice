/*  ---- For Each ----- */
/*  ---- For Each ----- */

// With ARRAY
const structureOfIndianArmy = [
  "Section",
  "Platoon",
  "Company",
  "Batalion",
  "Brigade",
  "Division",
  "Corps",
  "Command",
  "HQ",
];

structureOfIndianArmy.forEach(function (value) {
  // console.log(value);
});

structureOfIndianArmy.forEach((val, idx, arr) => {
  // console.log(val,idx,arr);  // each Element , index of array , full arr
});

function printStructur(item) {
  console.log(item);
}
structureOfIndianArmy.forEach(printStructur);

// With ARRAY OF OBJECT
const regimentOfIndianArmy = [
  { regimentName: "Madras Regiment", regimentEstablishment: "1758" },
  { regimentName: "Rajputa Regiment", regimentEstablishment: "1775" },
  { regimentName: "Rajput Regiment", regimentEstablishment: "1778" },
  { regimentName: "Dogra Regiment", regimentEstablishment: "1877" },
  { regimentName: "Sikh Regiment", regimentEstablishment: "1846" },
  { regimentName: "Jat Regiment", regimentEstablishment: "1795" },
];

regimentOfIndianArmy.forEach((reg)=>{
    console.log(`${reg.regimentName} is Esatblished on ${reg.regimentEstablishment}`);
})

const returnResultReg = regimentOfIndianArmy.forEach((items)=>{
  return items
})

console.log(returnResultReg); // undefined this foreach never return values from ARRAY