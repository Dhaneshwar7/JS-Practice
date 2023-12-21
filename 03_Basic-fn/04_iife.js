/*  Immediately Invoked Function Expressions (IIFE) */

// ()() first braces for writing function second for execution 
// First This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
// global scope ke variable pollution ---- simply

/* 1 */
(function(){
    console.log("pahla type chal gaya");
})();

// remember must end this type of iife with semicolon
/* 2 */
(()=>{
    console.log(`DB CONNECTED SUCCESSFULLY`);
})();

/* 3 */ //with parameters
((kuch)=>{
    console.log(`${kuch } ,DB CONNECTED SUCCESSFULLY`);
})('ye lo value')