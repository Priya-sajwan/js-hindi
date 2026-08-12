//  const user = {
//     username: "priya",
//     age: 20,
//     fullname: "priyasajwan",

//     getUserdetail: function(){
//         console.log("got user details from database");
//         console.log(`username: ${this.username}`);
//         console.log(`username: ${this}`);
//     }
//  }

// console.log(user.username);
// console.log(user.getUserdetail()); 



function  user(username,logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn
    return this
}
const userOne = new user("hitesh", 12, true)
const userTwo = new user("priya", 11, false)
console.log(userOne);
console.log(userTwo);