

// object literal 
// function constructor
// Es6 class
// Object.create()

// let amol = {
//     firstName: "amol",
//     lastName: "rao",
//     age: 34,
//     displayName: function () {
//         console.log(this.firstName + this.lastName)
//     }

// }

// // function constructor

// function Person(fn, ln, ag) {
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag
//     this.displayName = function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// let sarika = new Person("sarika", "pansare", 23)


// // Es6 

// class PersonB {
//     constructor(fn,ln,ag) {
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.displayName = function () {
//             console.log(this.firstName + this.lastName)
//         }
//     }

// }
// let chin = new PersonB("chinmay","deshpande",34)


// let obj = {
//     init:function(fn,ln,ag){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag 
//     },
//     displayName:function(){
//       console.log(this.firstName + this.lastName)
//     }
// }

// let poorva = Object.create(obj)
// poorva.int('poorva','vyas',29)
// poorva.displayName()


// ------------------------------------------

function PersonC(fn, ln, age) {
    this.firstName = fn
    this.lastName = ln
    this.age = age
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let abhisha = new PersonC('abhisha', "burande", 34)
let mayuri = new PersonC('mayuri', "rao", 23)

console.log(abhisha)
console.log(mayuri)



// every object has __proto__ === parent.proptype
console.log(abhisha.__proto__ === PersonC.prototype)

PersonC.prototype.displayName = function () {
    console.log(this.firstName + this.lastName)
}
PersonC.prototype.country = "India"

abhisha.displayName()
mayuri.displayName()

console.log(abhisha.country)
console.log(abhisha.country)

let q1 = abhisha.hasOwnProperty('country')
let q2 = abhisha.hasOwnProperty('firstName')
console.log(q1)
console.log(q2)
//-------------------------------------------------
// Array
let names = ["chinmay", "sarika", "ram", "ramesh"]
console.log(names)
names.push()
console.log(names.__proto__ === Array.prototype)

// Es6 class 


class PersonD {
    constructor(fn, ln, ag) {
        this.firstName = fn
        this.lastName = ln
        this.ag = ag
        // this.displayName = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }

    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

let amit = new PersonD('amit', 'bhure', 20)
let abhay = new PersonD('abhay', "jaiswal", 34)

console.log(amit)
console.log(abhay)

amit.displayName()
abhay.displayName()