function SetUserName(username){
    //complex DB Calls
    this.username = username
    console.log("calling");

}
/*  ------ Example. 1 -----  */
function CreateUser(username, email, password){
    SetUserName(username) //it calling but only reference not all variables of that 
    this.email= email
    this.password = password
}
const firstUser = new CreateUser("Ashok" , "ok@gmai.com", "234")
console.log(firstUser); //{ email: 'ok@gmai.com', password: '234' }

/*  ------ Example. 2 -----  */
function CreateUserSec(username, email, password){
    SetUserName.call(this, username) // in type we cand call the function and its variable access
    this.email= email
    this.password = password
}
const secondUser = new CreateUserSec("Amar" , "am@gmai.com", "999")
console.log(secondUser); //CreateUserSec { username: 'Amar',email: 'am@gmai.com',password:'999'  }

