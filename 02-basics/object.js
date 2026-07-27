// object literals

// const mysym = Symbol("key1")


// const jsUser = {
//     [mysym] : "yoyo",
//     name : "priya",
//     "full name": "priya sajwan",
//     age : 20 ,
//     location: "jaipur",
//     email : "priya@gmail.com",
//     isloggedIn: false,
//     lastloginday: ["monday", "tuesday" ] 
// }

// console.log(jsUser.email); 
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);



// jsUser.email = "priyasajwan@gmail.com"
// jsUser.email = "p@gmail.com"
// Object.freeze(jsUser)
// jsUser.email ="priyasaj@gmail.com"
// console.log(jsUser);


// +++++++++++++++++++++++++++++++++++++++++++ now we add a function in jsUser ++++++++++++++++++++++++
// jsUser.greeting = function(){
//     console.log("hello jsUser");
// }


// jsUser.greetingtwo = function(){
//     console.log(`hello js user, ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());






// const reg = {
//     email : "priya@gmail.com",
//     fullname: {
//         username: {
//             firstname: "priya",
//             lastname: "sajwan",
//         }
//     }
// }

// console.log(reg.fullname.username.lastname);

//+++++++++++++++++++++++++++++++  merge ++++++++++++++++++++++++++++++++++++++++++++++

// const obj1 = {1:'a', 2:'b', 3:'c'}
// const obj2 = {4:'d', 5:'e', 6:'f'}
// const obj3 = {7:'g', 8:'h', 9:'i'}

// const obj3 = {obj1, obj2 }
// console.log(obj3);

// const obj4 = Object.assign({},obj1, obj2, obj3) 
// console.log(obj4);

// const obj4 = {...obj1, ...obj2, }
// console.log(obj4);

//+++++++++++++++++  keys values pair ++++++++++++++++++++

// const tinder = new Object()  and const tinde = {}    //  both are thing but the differences are  first one is singleton and second one not.
// const tinder = {}

// tinder.id = "123abc"
// tinder.name = "samya"
// tinder.isloggedIn  = false

// console.log(tinder);



// const user = [
//     {
//         id: 1,
//         email: "priya2gmail.com"
//     }
// ]

// user{1}.email
// console.log(tinder);

// console.log(Object.keys(tinder));              // datatype array
// console.log(Object.values(tinder));            // datatype array
// console.log(Object.entries(tinder));            // datatype array , sub array.
// console.log(tinder.hasOwnProperty('name'));





const course = {
    courssename : "js in hindi ",
    price: "999",
    courseIns: "priya",

}
// course.courseIns

const {courseIns: ins} = course
console.log(ins);





