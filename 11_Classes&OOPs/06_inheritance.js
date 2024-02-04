class User {
    constructor(username){
        this.username = username
    }
    loginUser(){
        console.log(`Currently Login User is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    } 
    addcourse(){
        console.log(`Course is added by ${this.username}`);
    }
}

const firstTeacher = new Teacher("Virus" , "virus@gmail.com", "2343wsder3edf")
firstTeacher.addcourse() // Course is added by Virus
firstTeacher.loginUser() // Currently Login User is Virus


const firstUser = new User ("Shivaji");
firstUser.loginUser() //Shivaji
firstTeacher.addcourse() // not access of that class


console.log(firstTeacher === firstUser); // false
console.log(firstTeacher === Teacher); // false

console.log(firstTeacher instanceof User); // True
console.log(firstUser instanceof User); // True




