// const instaUser = new Object() -----> Singleton object / Constructor
// const instaUser = {} ---------->  Non-Singleton Object

const instaUser = {};
instaUser.id ="1234"
instaUser.email = "ok@gmail.com"
instaUser.isLoggedIn = false

// console.log(instaUser);

// Object inside objects 
const newObjUser = {
    name : "Delta",
    othernames:{
        companyname:{
            fullname:"delta mike",
            shortname:"deltasir"
        },
        profname:{
            fullname:"deepesh malviya",
            shortname:"deepesh"
        }
    },
    location: {
        workingLocation:{
            day:"bhapal",
            night: "indore"
        },
        stayLocation:{
            day:"bhopal",
            night: "semra"
        }
    },
    isLoggedIn: true
}
// console.log(newObjUser.location.stayLocation);
// console.log(newObjUser.othernames.companyname);

// Join objects in one Objects , combine 
const obj1 ={
    course : "MSc",year:"2"
}
const obj2 ={
    cours : "BSC",ye:"1"
}
const obj3 ={
    cour : "BTech",yea:"4"
}

// const normalcombineObj = {obj1,obj2,obj3} //wrong way-but it will return object inside of object like arr
// console.log(normalcombineObj);

// right way ---> assign method in Objects
const assignObj = Object.assign({},obj1, obj2, obj3); 
// console.log(assignObj);

// mostly used way ---> spread operator in Objects
const spreadOBj = {...obj1, ...obj2 , ...obj3}
// console.log(spreadOBj);

// get the value of Array of Objects 
const arr = [
    {name: "oke" , email:"oke@gmail.com"},
    {name: "mom" , email:"mom@gmail.com"},
    {name: "no" , email:"no@gmail.com"},
    {name: "yooo" , email:"yoo@gmail.com"},
]
// console.log(arr[1].email);
// console.log(arr[3].name);

// very important
// console.log(instaUser);
// console.log(Object.keys(instaUser)); /// it will return array of keys
// console.log(Object.values(instaUser)); /// it will return array of values
// console.log(Object.entries(instaUser)); /// it will return array into Array form of [first-key ,second-value]

// console.log(instaUser.hasOwnProperty("isLoggedIn")); // hasOwnProperty is used for question  key is it available or not

// ----------------- Object Destructuring --------

const course = {
    courseName :"sikho JS",
    coursePrice:"50",
    courseCoach : "mike"
}
// console.log(course.courseName); 

// const {courseCoach} = course // one way
const {courseCoach: cc} = course // second way
console.log(cc) 
 
// JSON format ---> JavaScript Object Notation 
{
    "name" : "ok",
    "id":"01"
    "results":[],
}
