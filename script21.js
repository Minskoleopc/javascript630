// Struture - Destructure
//             0         1      2       3
let names = ["chinmay","ram","rakesh","ravi"]
console.log(names[0])

// let a = names[0]
// let b = names[1]
// let c = names[2]
// let d = names[3]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

let [a,b,c,d] =  names
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//             0          1     2          3
let cities = ["pune","nagpur","wardha","amravati"]
let [a11,b12,c13,d14] = cities
console.log(a11)


let citiess = [["nagpur","wardha"],["indore","bhopal"],["patna","gaya"]]
//let [e,f,g] = citiess
// console.log(e)
// console.log(f)
// console.log(g)

let [[c1,c2],[c3,c4],[c5,c6]] = citiess
console.log(c3)


// program 2

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:67
}


// let {firstName,lastName,age,rollNo} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)

let vehicle = {
    color:"red",
    age:10
}

let {color:cl1,age:ag1} = vehicle
console.log(cl1)
console.log(ag1)


// program4
let family = {
    sister:"gauri",
    parent:{
        father:"shirish",
        mother:"kanchan"
    }
}

let {sister:s11,parent:{father:f11,mother:f22}} = family
console.log(s11)
console.log(f11)
console.log(f22)


// Program 

let students = [

    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"poorva",
        lastName:"vyas"
    }

]

let [{firstName:l1,lastName:l2},{firstName:l3,lastName:l4}] = students
console.log(l1)
console.log(l2)
console.log(l3)
console.log(l4)

// Progam6

let a1 = {
    skills:["python","java"],
    lang:"hindi"
}

let {skills:[l44,l55], lang:l22} = a1

console.log(l44)
console.log(l55)
console.log(l22)