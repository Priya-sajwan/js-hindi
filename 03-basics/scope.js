//scope 
// let a = 23
// const b = 34
// if(true) {
//     let a = 45
//     let b = 67
//     console.log("inner", a);
// }
// console.log("outer", a);

// +++++++++++++++++++++++ out of scope +++++++++++++++++++

// function one(){
//     const username = "priya"

//     function two(){
//         const website = "youtube"
//         // console.log(username);
//     }
//     two()
//      console.log(website);
    
// }
// one()

//++++++++++++++++++++++ declaration of function ++++++++++++++++++++++++++++++
// addone()
// function addone(num){
//     return num + 1
// }


// addtwo()
// const addtwo = function(num1){
//     return num1 + 2
// }


//+++++++++++++++++++++++++++++++++++ this or arrow +++++++++++++++++++++++++++++++

// const user = {
//     name : "priya",
//     age: 20,
//     fullname: "priyasajwan",

//   work: function() {
//     console.log(`my name is ${this.name} `)
//     console.log(this);

//  }  

// }
// console.log(this)
// user.work()

// user.name = "pj"

//++++++++++++++++++++++++= this +++++++++++++++++++++++++++++++++

// function chai(){
//   let username = "priya"
//   console.log(this);
// }
// chai()

//++++++++++++++++++++++++++= arrow funciton ++++++++++++++++++++++++

// const chai = () => {
//   let usename = "priya sajwan"
//   console.log(this);
// }
// chai()

// const addtwo = (num1, num2) => {
//  return num1 + num2

// }
// console.log(addtwo(3, 4));


// +++++++++++= implicit return +++++++++++++++=

// const add = (num1, num2) => (num1 + num2)
//  console.log(add(3, 5));

// const username = (num) => ({username : "priya"})

//  console.log(username(9));


// const myArray = [2, 3, 4, 5]

// myarray.array.forEach(element => {
  
// });



