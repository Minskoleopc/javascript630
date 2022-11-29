// program1
let names = ["python","django","javascript","css3"]

let a = names[0]
let b = names[1]
let c = names[2]
let d = names[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let [a1,b1,c1,d1] = names
console.log(a1)
console.log(b1)
console.log(c1)
console.log(d1)

// program2

let states = [["nagpur","wardha"],["jaipur","udaipur"],["kolkata","banglore"]]
let [s1,s2,s3] = states
console.log(s1)
console.log(s2)
console.log(s3)

let [[c11,c12],[c14,c15],[c17,c18]] = states
console.log(c17)

// program 3

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:17
}

let l1 = info.firstName
let l2 = info.lastName
let l3 = info.age
let l4 = info.rollNo
console.log(l1)
console.log(l2)
console.log(l3)
console.log(l4)

// let {firstName,lastName,age,rollNo} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)


let {firstName:fn,lastName:ln,age:ag,rollNo:rn} = info
console.log(fn)
console.log(ln)
console.log(ag)
console.log(rn)


// program4

let family = {
    sibling:"gauri",
    parent:{
        mother:"kanchan",
        father:"shirish"
    }
}

let {sibling:sb,parent:{mother:mb,father:fb}} = family
console.log(sb)
console.log(mb)
console.log(fb)

// program 5

let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande",
        age:32

    },
    {
        firstName:"amol",
        lastName:"rao",
        age:31

    }
]

let [{firstName:fa1,lastName:la1,age:ag1},{firstName:fa2,lastName:la2,age:ag2}] = students
console.log(fa1)
console.log(la1)
console.log(ag1)
console.log(fa2)
console.log(la2)
console.log(ag2)

// programs


let chinmay = {
    fullName:"chinmay deshpande",
    skills:["javascript","cypress","node"],
    parents:{
        mother:"kanchan",
        father:"shirish"
    }
}
let {fullName:z1,skills:[z2,z3,z4],parents:{mother:z5,father:z6}} = chinmay
console.log(z4)
console.log(z2)













// //Retrive
// console.log(info.firstName)
// console.log(info['firstName'])
// //Update 
// info.firstName = "samay"
// info['firstName'] = "anil"

// //Add 
// info.city = "pune"
// info['lang'] = "hindi"

// //Delete
// delete info.city
// delete info['lastName']




