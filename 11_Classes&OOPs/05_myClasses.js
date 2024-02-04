// ES 6 
/* Class Constructors */
class User{
    constructor(username ,email,password){
        this.username = username
        this.email= email
        this.password = password
    }
    encryptPassword (){
        return `${this.password}abc`
    }
    changeUsername (){
        return `${this.username.toUpperCase()}`
    }
}

const pahlaUser = new User("Delta" , "mike@gmial.m", "001")
console.log(pahlaUser.encryptPassword());
console.log(pahlaUser.changeUsername());


/* -- Behind the Scene in function --- */

function Client(clientName, clientEmail, clientPassword){
    this.clientName = clientName
    this.clientEmail= clientEmail
    this.clientPassword = clientPassword
}

Client.prototype.clientPasswordchange = function(){
    return `${this.clientPassword}abc`
}
Client.prototype.clientNamechange = function(){
    return `${this.clientName}abc`
}
const firstClient = new Client("Amar" , "Amar@gmail.com", "23434")
console.log(firstClient.clientPasswordchange())
console.log(firstClient.clientNamechange())



