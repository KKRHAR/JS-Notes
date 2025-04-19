// const promiseOne = new Promise((resolve,reject)=>{

// // Do an async task
// // DB calls,cryptography,network

// setTimeout(()=>{
//     console.log("Async task is complete");
//     resolve();
// },1000)
// })


// promiseOne.then(()=>{
//     console.log("Promise consumed");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Async Task two");
//         resolve()
        
//         }, 1000);

// }).then(()=>{
//     console.log("Async 2 Resolved");
// })

// const promiseThree = new Promise((resolve,reject)=>{
// setTimeout(()=>{

//     resolve({username:"Ragen",email:"nepalragen@gmail.com"})
// },1000)

// })
// promiseThree.then((user)=>{
// console.log(user);
// })

// const promiseFour = new Promise((resolve,reject)=>{
// setTimeout(()=>{
// let error= true;
// if(!error){
//     resolve({username:"Ragen",password:"12345"})
// }else{
//     reject ('Error:Something went Wrong')
// }
// },2000)
// })
// promiseFour
// .then((user)=>{
// console.log(user);
// return user.username

// })
// .then((username)=>{
// console.log(username);

// })
// .catch(err=>console.log(err))
// .finally(()=>{
//     console.log("Finally I am back");
    
// })

const promiseFive = new Promise((resolve, reject) => {
setTimeout(()=>{
let error=true
if(!error){
    resolve({username:"No one",password:"1234"})
} else{
    reject("Error: Js Went Wrong");
}
    },1000)
});

async function consumepromiseFive(params) {
 try {  const response = await promiseFive;
    console.log(response);
}
    
catch (error) {
    console.log(error);
  
 }
}
// console.log(consumepromiseFive())



// async function getAllUser(){
// try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     }
    
// catch (error) {
//     console.log("Error: Js went down!");
    
// }
// }
//  console.log(getAllUser());


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error)
)

// Here in this code 🔁 In simple steps:
// fetch() returns a Promise that gives you the response stream.

// response.json() also returns a Promise — it parses the body to actual data.

// .then() continues chaining the final data.


// so that why we didnot created promise here because 
// fetch already return promise 

