// function saymyname(){
//     console.log("A");
//     console.log("S");
//     console.log("T");
//     console.log("I");
//     console.log("K");
    
// }

// saymyname()


// function addtwonumbers(number1 , number2){
//     console.log(number1 + number2)
// } //would work but there will be issues (4 + a)
// addtwonumbers(3 , 6)

// function addtwonumbers(number1 , number2 ){
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// // addtwonumbers(2 , 5)
// const result = addtwonumbers(2 , 5)
// console.log(result);



// function loginuser(username){
//     if(!username){
//         console.log("Please enter a username")
//         return
//     }
//     return `${username} just logged in `
// }

// console.log(loginuser("Astik"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "kittycat",
//     price: 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));