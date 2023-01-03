// 1) Object literal 
// 2) function constructor 
// 3) Es6 class
// 4) Object.create method
//----------------------------------------------------------
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:23,
    rollNo:45,
    skills:["python","javascript","html","css"]
}

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:43,
    rollNo:45,
    skills:["python2","javascript","html5","css3"],
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

// template 
let names = ["chinmay","sarika","poorva"]
// template (properties and methods)

function Person(firstName,lastName,age,rollNo,skills){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNo = rollNo
    this.skills = skills
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let rahul = new Person("rahul","singh",23,34,["js","py","java"])
console.log(rahul)
rahul.display()

// program 2
//es6 class
class PersonB {
    constructor(firstName,lastName,rollNo,age,skills){
        this.firstName = firstName
        this.lastName = lastName
        this.rollNo = rollNo
        this.age = age
        this.skills = skills
        this.display = function(){
            console.log(this.firstName+this.lastName)
        }
    }
}
let ram = new PersonB("ram","dani",23,34,["python","django","javascript"])
console.log(ram)
ram.display()

// Object create 


let sameer = Object.create({})
console.log(sameer)

// sameer.firstName = "sameer"
// sameer.lastName = "jaiswal"
// sameer.age = 28
// sameer.rollNo = 77
// sameer.skills = ["python","css","html", "javascript"]
// sameer.display = function(){
//     console.log(this.firstName + this.lastName)
// }

//console.log(sameer)


let obj = {
    init:function(fn,ln,ag,rn,skills){
        this.firstName = fn,
        this.lastName = ln
        this.rn = rn,
        this.age = ag,
        this.skills = skills
    },
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}

let pravin = Object.create(obj)
pravin.init("pravin","tambe",34,54,["css","html","js"])
console.log(pravin)
pravin.display()















