/*  For Loop */

// Mostyle use way
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(`This is number${element}`);   
}

// If Else inside loop
for (let i = 0; i < 20; i++) {
    if(i==5){
        console.log(`this is Number${i}`);
    }
    console.log(`all other ${i}`);
    
}

// Table print with helo of For Loop inside For Loop
for (let i = 1; i <= 10; i++) {
    console.log(`This i Table of ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
 
}

//Loop in Array
let myGuns = [ "Ak47", "M14","Sniper"];

for(let i=0 ;i < myGuns.length; i++){
    console.log(`Gun name :- ${myGuns[i]}`);
}


// Break and Continue in Loops

for (let i = 0; i < 20; i++) {

    if(i==11){
        console.log(`11 is Detected`);
        break // it stop when this finds it
    }
    console.log(`number ${i}`);
    
}


for (let i = 0; i < 20; i++) {
	if (i == 4) {
		console.log(`04 is Detected`);
		continue; // after detect just print this and ignore next loop for once, then again continues 
	}
	console.log(`number ${i}`);
}