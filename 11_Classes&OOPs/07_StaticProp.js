class User{
    constructor(username){
        this.username = username
    }
    loginUser(){
        console.log(`Logged In ${this.username}`);
    }
   static createId(){ // not accessible by static property
        return `somehti244345`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const firstOne = new Teacher("Shambah" , "shambaji@gmail.com")
firstOne.loginUser();
console.log(firstOne.createId()) // without static it can be accessible

