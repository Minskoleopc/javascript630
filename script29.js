// set 

let setA = new Set()

// property  (size)
console.log(setA.size)
console.log(setA)
// methods ()

// add()
setA.add('amol')
setA.add('mayur')
setA.add('amol')
console.log(setA)

//has()
let q1 = setA.has('amol')
console.log(q1)
let q2 = setA.has('Amol')
console.log(q2)

// delete
setA.delete("amol")
console.log(setA)

//clear 
setA.clear()
console.log(setA)


// 2nd way to define set 
let setC = new Set(["apple","mango","banana","grapes","tomato","mango"])
console.log(setC)

console.log(setC[0])
// set does not stores the value by index

setC.forEach(function(el){
    console.log(el)
})


// Object s
let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:45
}

for(let key in info){
    console.log(key,info[key])
}


// object

let info2 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}

for(let key of Object.keys(info2)){
    console.log(key)
}

for(let val of Object.values(info2)){
    console.log(val)
}

for(let KeyVal of Object.entries(info2)){
    console.log(KeyVal)
}

for(let [k,v] of Object.entries(info2)){
    console.log(k,v)
}

// let a = [33,44,55]
// let [a1,a2] = a
// console.log(a1)
// console.log(a2)

let setD = new Set([{firstName:"chinmay"},{firstName:"ram"},{firstName:"sham"},{firstName:"ram"}])
console.log(setD)


for(let {firstName} of setD.keys()){
    console.log(firstName)
}
// for(let x of setD.values()){
//     console.log(x)
// }
// for(let x of setD.values()){
//     console.log(x)
// }


let setE = new Set(["apple","mango","grapes"])
console.log(setE)


for(let key of setE.keys()){
    console.log(key)
}

let setF = new Set(
    [

        {
            firstName:"chinmay",
            lastName:"deshpande"

        },

        {
            firstName:"samay",
            lastName:"dani"

        }

    ]

)
console.log(setF)
for(let {firstName,lastName} of setF.keys()){
    console.log(firstName,lastName)
}


// 10 am