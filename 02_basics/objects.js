// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {                    // object creation , inside it are key value pairs
    name: "Astik",
    "full name": "Astik Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Patna",
    email: "aastik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])


// JsUser.email = "aastik@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "aastik@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());