// function setusername(username){
//     this.username = username
   
// }
// function createuser(username, emailid, password){
// setusername.call(this, username)
// this.email = emailid
// this.password = password 

// }const chaii = new createuser("chaii", 'chai@gamil.com', '123')
// console.log(chaii);

class user {
    constructor(username, emailid, password){
         this.username = username
         this.email = emailid
         this.password = password 
    }

encryptpassword() {
    return `${this.password}abc`
}}

const chaii =  new user("chaii", 'chai@gamil.com', '123')
console.log(chaii.encryptpassword())
