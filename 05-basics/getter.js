class user {
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
       return this._password
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const hitesh = new user("hitesh@gmail.com", "abcdefgh")
console.log(hitesh.password);