// Immediately Invoked Function Expressions(IIFE)

// to avoid global scope pollution we use iife 
// here we wrap the function in a () so the structure is (fn)(execution)

(function cat(){   // named iife
    console.log(`DB CONNECTED`);
})();


// ( (name) => {  // simple iife
//     console.log(`DB CONNECTED TWO  ${name}`);
// })('Aastik');



// JS EXECUTION CONTEXT
/*
Three types ->
1. Global EC (allocated in this keyword)
2. Function EC
3. Eval EC(kinda global)

The code is executed in two phases ->
1. Memory Creation Phase 
2. Execution Phase
*/


