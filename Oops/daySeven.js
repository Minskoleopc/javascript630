class PersonA{

    firstName = undefined
    lastName = undefined
    age = undefined
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

let amol = new PersonA()
console.log(amol)
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 34
console.log(amol)

// Setting the valu at the time of object creation 

class PersonB {
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let chinmay = new PersonB("chinmay","deshpande",23)


// program 3 

class PersonC {

    setFName(fn){
        this.firstName = fn
    }
    setLName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }

    getFName(){
        return this.firstName
    }
    getLName(){
        return this.lastName
    }
    getAge(){
        return this.age
    }
}

let gauri = new PersonC()
console.log(gauri)
gauri.setFName("gauri")
gauri.setLName("deshpande")
gauri.setAge(34)
console.log(gauri)

let rr  = gauri.getAge()
let rr2  = gauri.getFName()
let rr3  = gauri.getLName()
console.log(rr)
console.log(rr2)
console.log(rr3)


// set and get keyword

class PersonD {
    set setFirstName(fn){
        this.firstName = fn
    }
    set setLName(ln){
        this.lastName = ln
    }
    set setAge(ag){
        this.age = ag
    }

    get getFirstName(){
        return this.firstName
    }
    get getLName(){
        return this.lastName
    }
    get getAge(){
        return this.age

    }
}
let ram = new PersonD()
ram.setFirstName = "poorva"
ram.setLName = "vyas"
ram.setAge = 34

console.log(ram.getAge)
console.log(ram.getFirstName)
console.log(ram.getLName)

class PersonE {
    static greeting(name){
        console.log("hello "+name)
    }   
}

// static methods can be directly on class name
PersonE.greeting("chinmay")