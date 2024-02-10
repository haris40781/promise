

setTimeout(function(){
console.log("HELLO WORLD")
},2000)


setInterval(function(){
    document.write("WOW")
    },200000000000000)


// PROMISES //

let promiseOne = new Promise(function(resolve , reject){
    console.log("THIS IS FIRST PROMISE");
    setTimeout(function(){
    },2000)
})


let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name : "Ali"  , email : "ali@gmaiol.com"})
    },4000)
})

promiseTwo.then(function(user){
    console.log(user);
})

//  THREE //

promiseThree = new Promise(function(relove , reject){
    setTimeout(function(){
        relove({username : "peter" , pasword : "123456"})
    },2000)
})

promiseThree.then(function(user){
    return user.username;
}).then(function(pass){
    console.log(pass);
})

let promiseFour = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({myvalue : "Haris" , password : "125315"})
        }
    else{
        reject("ERROR : SOMERTHING WENT WRONG")
    }
},3000)

 })
       
promiseFour.then(function(myvalue){
    console.log(myvalue);
})
.catch(function(error){
    console.log(error);
})


// PROMISE SIX //
let promisesix = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({name : "ali" , email : "ali@gmail.com"})
        }
        else{
            reject("ERROR : SOMETHING WENT WRONG ERROR")
        }
    },4000)
})

promisesix.then(function(userOne){
    return userOne.email;
})
.then(function(xyz){
    console.log(xyz);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("THIS PROMISE HAS BEEN RESOLVE OR REJECTED");
})



let promiSeseven = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error){
            resolve("This is Wow")
        }
        else{
            reject("YE ek error hy")
        }
    },2000)
})

async function consumedPromiseSeven(){
    try{
        let data = await promiSeseven;
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseSeven()

