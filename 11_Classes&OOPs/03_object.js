function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2;

console.log(multipleBy5(6)); //30
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); // {}


function createUser(username ,score ){
    this.username = username
    this.score = score
}
createUser.prototype.increment =()=>{
    this.score++
}
createUser.prototype.printMe=()=>{
    console.log(`Score is ${this.score}`);
}

const pahla = createUser("Bheem" , 98)
const dusra = createUser("kaliya" , 90)