/* Promises */
//Example one
const promiseOne = new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("Promise ONe is Completed");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise one Consumed");
})


//Example Two
new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("Promise Two is Completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise Two Consumetd");
})

// Example Three
// we can pass the value in OBject from create promise to resolve state
const PromiseThree = new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("Promise Three is Completed");

        resolve({username: "okDelta" , email:"delta@gmail.com",})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
    console.log("Promise Three Consumetd");
})


//Example Four  , reject/catch
const PromiseFour = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username:"Sardar KHan" , pass:"123"});
        }else{
            reject(`ERROR: Error Something went Wrong`);
        }
    },1000)
})
PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally REsolve or Rejected");
})

//Example Five  ,Async try Catch
const PromiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username:"Javascritp" , pass:"123"});
        }else{
            reject(`ERROR: JS went Wrong`);
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        let response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// Example with Api fetch
async function getAllUsers(){
    try {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let res = await data.json()
        console.log(res);
        
    } catch (error) {
        console.log(`E: ${error}`);
    }
}
// getAllUsers()


//Example of fetch direct 
fetch('https://api.github.com/users/dhaneshwar7')
.then((result)=>{
    let res = result.json();
    console.log("helod");
    // console.log(res);
    return res
}).then((data)=>{
    console.log(data);
})
.catch(error=>console.log(error))