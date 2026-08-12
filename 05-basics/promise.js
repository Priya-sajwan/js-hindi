// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve()
//     }, 2000)
     
// })
// promiseOne.then(function(){
//     console.log("promise consumed")
// })


// //++++++++++++++  without varible  +++++++++++++++++++++++
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     }, 2000)
     
// })

// .then(function(){
//     console.log("promise consumed")
// })



// //++++++++++++++++++++++++++ promise three  +++++++++++++++++++++++
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("ya hii");
//         resolve({username: "chaii", email: "chaiiexample.com"})
//     }, 1000)

// })
// promiseThree.then(function(user){
//     console.log(user)
// })

//+++++++++++++++++ promise four ++++++++++++++++++++++++++
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true 
//         if (error){
//             resolve({username: "priya", email: "chaillexample.com"})
//         }
//         else{
//           reject("something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user) => {
//    console.log(user);
//     return user.username

// }).then((myusername) => {
//     console.log("username :", myusername);
// })
// .catch(function(ee){
//     console.log(ee);
// })
// .finally(() => {
//     console.log("finally it done")
// })

//++++++++++++ promise five +++++++++++++++++++++++++

const promiseFive = new Promise(function(resolve, reflect){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "js", password:"123"})
        }
        else{
            reflect('js went wrong')
    }
    }, 1000)
});

async function consumePromise() {
   try {
        const response = await promiseFive
        console.log(response);
    }
    catch(ee) {
        console.log(ee);
    }
}

consumePromise() 



fetch('http....')
.then((respond) => {
    return response.json()

}).then(function (data){
   console.log(data);
})
.catch((error) => console.log(error))