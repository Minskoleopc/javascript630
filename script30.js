//entries() , keys() , value()


// map

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:34,
    age:34
}

// Object properties are always string 
// Property -- boolean , number , array , string , object

let mapA = new Map()
// properties and method
console.log(mapA.size)

mapA.set(1,"admin")
mapA.set(true,"above18")
mapA.set("chinmay","desgpande")
console.log(mapA)


let roles = new Map()
console.log(roles)

// Property
console.log(roles.size)

// set()
roles.set(1,'admin')
roles.set(2,'customer')
roles.set(3,'support')
roles.set(4,'user')
console.log(roles)
console.log(roles.size)

// get()
let q1 = roles.get(1)
console.log(q1)

// clear()
// roles.clear()
// console.log(roles)
roles.delete(1)
console.log(roles)
roles.delete(2)
console.log(roles)

// has()
let q2 = roles.has(3)
console.log(q2)


let alpha = new Map(
    [
        ['A',"apple"],
        ["B","ball"],
        ["C","cat"],
        ["D",'dog']
    ]
)
console.log(alpha)

alpha.forEach(function(el){
    console.log(el)
})

for(let prop of alpha.keys()){
    console.log(prop)
}

for(let val of alpha.values()){
    console.log(val)
}

for(let [k,v] of alpha.entries()){
    console.log(k,v)
}

// set() , get() , delete() , clear() , has() ,keys(),values()
// entries() , forEach()
// size()

let a = new Map()
let b = new Map([
    ['r',"rabbit"],
    ['s','sun'],
    ['t','television']
])


// ---------------------------------> 

let quiz = new Map(
    [
        ['questions','answers'],
        ['capital of MH','mumbai'],
        ['capital of MP','bhopal'],
        ['capital of RJ','jaipur']
    ]
)


console.log(quiz.get('capital of MH'))





// let count = 0
// for(let [k,v] of quiz.entries()){
//     //console.log(k,v)
//     if(k.startsWith('c')){
//        let userInput =  prompt(k)
//        if(userInput === v){
//             count = count + 1
//        }
//     }
// }

// if(count === 3){
//     console.log('Gold')
// }
// else if(count === 2){
//     console.log('Silver')
// }
// else if(count === 1){
//     console.log('Bronze')
// }
// else {
//     console.log('Please try again')
// }



// let count = 0
// for(let [k,v] of quiz.entries()){
//     //console.log(k,v)
//     if(k.startsWith('c')){
//        let userInput =  prompt(k)
//        if(userInput === quiz.get(k)){
//             count = count + 1
//        }
//     }
// }

// if(count === 3){
//     console.log('Gold')
// }
// else if(count === 2){
//     console.log('Silver')
// }
// else if(count === 1){
//     console.log('Bronze')
// }
// else {
//     console.log('Please try again')
// }


// Remove duplicate element from array

let duplicate = ["amol","raj","amol","ninad","vijeet"]
let q7 = new Set(duplicate)
console.log(q7)
let w1 = Array.from(q7)
console.log(w1)


// object array string map set userdefined