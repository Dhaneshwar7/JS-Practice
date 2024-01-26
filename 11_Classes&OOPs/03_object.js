function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2;

console.log(multipleBy5(6)); //30
console.log(multipleBy5.power); //2
console.log(multipleBy5.prototype); // {}