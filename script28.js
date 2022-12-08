
let names = ["apple","mango","banana","chikoo", "apple"]
console.log(names)

// Set 

let q1 = new Set()
console.log(q1)

// add - to add elements to the set
q1.add('amol')
q1.add('amol')
q1.add('amit')
console.log(q1)

// set does not stores the value by index
console.log(q1[0])

//------------------------------------------------------>

let setB = new Set()
console.log(setB)

// property size
let aa = setB.size
console.log(aa)

// add the element to set  add()
setB.add('pune')
setB.add('mumbai')
setB.add('nagpur')
setB.add('banglore')
setB.add('kolkata')
setB.add('pune')
console.log(setB.size)

// to check whether the element is present or not  has()
let q2 = setB.has('mumbai')
let q3 = setB.has('wardha')
console.log(q2)
console.log(q3)

// deleting the particular element 

console.log(setB)
setB.delete('pune')
console.log(setB)

// property --- size 
// 3 method - add() , has() , delete()
// clearing the complete set 

// setB.clear()
// console.log(setB)

console.log(setB)
//console.log(setB[0])

//            0       1          2         3          4
let city = ["pune", "mumbai","banglore","kolkata","wardha"]
city.forEach(function(el){
    console.log(el)
})

setB.forEach(function(el){
    console.log(el)
})

// size 
// add() , has() , delete() , clear() , forEach()
// entries() , keys() , values()

//-------------------------------------------------------------------

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    lang:"Hindi"
}

console.log(Object.keys(info))
console.log(Object.values(info))
console.log(Object.entries(info))

for(let property of Object.keys(info)){
    console.log(property)
}
for(let value of Object.values(info)){
    console.log(value)
}
for(let item of Object.entries(info)){
    console.log(item)
}

// Map -- 6:30pm