//             0       1       2         3
let names = ["amol","sarika","poorva","sham"]
console.log(names[0])
console.log(names[1])

// for loop
for(let i = 0 ; i < names.length ; i++){
    //console.log(i)
    console.log(names[i])
}

// Array Object 
// Object property and method
// Method - action and return type


// Array -- object 
//              0         1           2          3
let country = ["India","Srilanka","Pakistan","Bangladesh"]
console.log(country.length)

// Method  (push() , unshift() , pop() , shift() , includes() , join())

let fruits = ["apple","banana","grapes","chikoo"]
let e1 = fruits.push('papaya')
console.log(e1)
console.log(fruits)

let e2 = fruits.unshift('mango')
console.log(e2)
console.log(fruits)

let e3 = fruits.pop()
console.log(e3)
console.log(fruits)

let e4 = fruits.shift()
console.log(e4)
console.log(fruits)

fruits = ["apple","banana","grapes","chikoo"]

let e5 = fruits.includes('apple')
console.log(e5)

let e6 = fruits.join('@') // string
console.log(e6)

// map() , filter() , reduce()

//                0       1    2   3
let birthYear = [1989 , 1990,1991,1992]
let ages = []
for(let i = 0  ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2022 - birthYear[i])
    let b = 2022 - birthYear[i]
    ages.push(b)
}
console.log(ages)

// birthYear = [1989 , 1990,1991,1992]
birthYear.map(function(el,index,array){
    //el --- currentElement
    //index -- number
    //array complete array 
    //console.log(el,index,array)

})

let q1 = birthYear.map(function(el,index,array){
    return  2022 - el
})
console.log(q1)

let numbers = [11,22,33,44,55]
let q3 = numbers.map(function(el,index,array){
    return el * 10
})
console.log(q3)


// Program2 


let numbers2 = [44,55,22,33,77,88,55,66,88,]
// [55,77,88,,55,66,88]
let above50 = []
for(let i = 0 ; i < numbers2.length ; i++){
    if(numbers2[i] > 50){
        above50.push(numbers2[i])
    }
}
console.log(above50)
let q4 = numbers2.filter(function(el,index ,array){
    return el > 50
})
console.log(q4)

let numbers3 = [44,66,22,33,44,55,77,22,99,100]
let q5 = numbers3.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q5)


// Program3

let numbers4 = [11,22,33]
let total = 0

for(let i = 0 ; i <  numbers4.length ; i++){
    // console.log(i)
    // console.log(numbers4[i])
    total = total + numbers4[i]
    //       0    +     11          ======> 11
    //       11   +     22          ======> 23
    //       33   +     33          =======> 66
}
console.log(total)

let q6 = numbers4.reduce(function(acc,el,index,arr){
    return acc + el // acc ===> 11 // acc ====> 33  // acc ====> 66
},0)
console.log(q6)





