
// join() , push() , pop() , shift() , unshift() ,includes()
// map() , filter() , reduce() ,forEach() 
// some() , every() , find() , findIndex()

let arr = [11,22,33,44,55,66,77,88]
//[12,23,34,45,56,67,78,89]
let e1 = arr.map(function(el,index,arr){
    return el + 1
})
console.log(e1)

let names = ["chinmay","amol",'sumit','ram']
//[7,4,5,3]
let e2 = names.map(function(el){
    return el.length
})
console.log(e2)

// filter()
let arr2 = [11,22,33,44,55,66,77,88]
let e3 = arr2.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(e3)

let names2 = ["chinmay","amol",'sumit','ram']
let e4 = names2.filter(function(el){
    return el.length == 4
})
console.log(e4)


// reduce()
let arr3 = [11,22,33]
let e5 = arr3.reduce(function(acc,el){
    return el + acc
},0)
console.log(e5)


// Javascript -- object 
// Object - Property and Method
// Method action and return

// map() === array
// filter() === array
// reduce() === single value

// forEach()
let city = ["pune","mumbai","banglore","kolkata"]
city.forEach(function(el,index,arr){
    console.log('welcome'+ el)
})

//          0   1  2  3  4  5  6   7   8
let arr4 = [33,44,51,33,44,55,222,444,555]
let e6 = arr4.filter(function(el){
    return el > 100
})
console.log(e6)

//find
let e7 = arr4.find(function(el){
    return el > 100
})
console.log(e7)

//findIndex 
let e8 = arr4.findIndex(function(el){
    return el > 100
})
console.log(e8)
// some
let arr5 = [22,33,11,22,33,44,55,66,7,77]
let e9  = arr5.some(function(el,index,arr){
    return el > 500
})
console.log(e9)
//every
let e10 = arr5.every(function(el,index,arr){
    return el > 50
})
console.log(e10)


// map() == array
// filter() == array 
// reduce() == single value 
// forEach() == undefined
// some() == boolean value 
// every() == booela value 
// find() == first occurence where condition is true
// findIndex ==first occurence index number where condition is true

// concat()

let arr6 = [1,2,3]
let arr7 = [11,22,33]
let e11 = arr6.concat(arr7)
console.log(e11)

let e12 = arr7.concat(arr6)
console.log(e11)

// ==> array
// reverse()

let countries = ["India","pakistan","srilanka","Nepal"]
let e13 =countries.reverse()
console.log(e13)

// sort()
let e14 = countries.sort()
console.log(e14)














