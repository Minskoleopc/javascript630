
//map()
let numbers = [11,22,33,44,55,66,77]
let e1 = numbers.map(function(el,index,arr){
    return el - 1
})
console.log(e1)

//filter()
numbers = [11,22,33,44,55,66,77]
let e2 = numbers.filter(function(el,index,arr){
    return el > 40
})
console.log(e2)

//reduce
numbers = [11,22,33,44,55,66,77]
let e3 = numbers.reduce(function(acc,el,index,arr){
    return acc + el
}, 0)
console.log(e3)

//forEach
cities = ["pune","delhi","banglore","kolkata"]
cities.forEach(function(el){
    console.log('welcome '+ el)
})


let numbersB = [33,44,55,6,77,88]
let e5 =numbersB.filter(function(el){
    return el > 30
})
console.log(e5)

// find()
let e6 =numbersB.find(function(el){
    return el > 30
})
console.log(e6)

// findIndex()
let e7 =numbersB.findIndex(function(el){
    return el > 30
})
console.log(e7)

// some()
let e8 = numbersB.some(function(el){
    return el > 80
})

console.log(e8)

// every()
let e9 = numbersB.every(function(el){
    return el > 1
})
console.log(e9)

let arr1 = [22,33,44]
let arr2 = [44,55,66]

let q1 = arr1.concat(arr2)
console.log(q1)

let arr3 = arr1.reverse()
console.log(arr3)

//-----------------------------------------

//               0        1       2       3         4
let animals = ["tiger" ,"lion","snake","panthar",'rabbit']
//             -5         -4      -3       -2       -1

//slice()

//animals.slice(startValue,endValue(not included))
let e10 = animals.slice(1)
let e11 = animals.slice(1,4)
let e12 = animals.slice(0,-1)
let e13 = animals.slice(-3)
let e14 = animals.slice(-5,-2)
let e15 = animals.slice(-5,2)
let e16 = animals.slice(-1,-5)
console.log(e10)
console.log(e11)
console.log(e12)
console.log(e13)
console.log(e14)
console.log(e15)
console.log(e16)
//splice()

//             0        1        2       3      4
let names = ["amit","akshar","abhinav","ram","rakesh"]

//names.splice(startIndex,numberOfToBeDeleted)
//names.shift()
//names.pop()
//names.splice(1,2)
//names.splice(2,2)
//console.log(names)

// delete element on index 1
// names.splice(1,1)
// console.log(names)

// delete and replace
names.splice(2,2,"chinmay","amol")
console.log(names)
// flat()

//              0           1          2
//           0  1  2    0  1   2   0   1  2
let arr5 = [[11,22,33],[44,55,66],[77,88,99]]
// console.log(arr5[0][2])
// console.log(arr5[1][2])
// console.log(arr5[2][2])
let e17 = arr5.flat()
console.log(e17)
// indexOf()

let e18  = [11,33,44,55,66]
let e19 = e18.indexOf(44)
console.log(e19)

// at()
let vegetable = ["carrot","cabbage","cauliflower"]
let e20 = vegetable.at(1)
console.log(e20)