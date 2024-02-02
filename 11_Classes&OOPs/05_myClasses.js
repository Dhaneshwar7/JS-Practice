
class User{
    constructor(username ,email,password){
        this.username = username
        this.email= email
        this.password = password
    }

    encryptPassword (){
        return `${this.password}abc`
    }
}

const pahlaUser = new User("Delat" , "mike@gmial.m", "001")
console.log(pahlaUser);