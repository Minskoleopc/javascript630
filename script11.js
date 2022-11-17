// poonam
// rushi
// Nilesh
// Java --->
// SQL 
// 20 nov

//            0          1       2
let names = ["apple","banana","mango"]
console.log(names[0])
console.log(names[1])
console.log(names[2])

for(let i = 0 ; i < 3; i++){
    //console.log(i) // 0 ,1,2
    console.log(names[i]) 
}

// Object ...
// Properties and Method
// Method - Action and Return type 

//             0         1        2        3
let cities = ["pune","jaipur","banglore","pune"]
let a = cities.length
console.log(a)
// push()
// action  - add the element at last
// return type - new length of array
let q1 = cities.push('goa')
console.log(q1)
console.log(cities)

// unshift()
// action - adds the element at first 
// return - new length array
// [ 'pune', 'jaipur', 'bnaglore', 'pune', 'goa' ]

let q2 = cities.unshift('nagpur')
console.log(q2)
console.log(cities)

// pop()
//action - removes the last element 
//return - the same element

let vegetable = ["tomato","potato","cabbage","spinach"]
let q3 = vegetable.pop()
console.log(q3)
console.log(vegetable)

//shift()
//action -removes the first
//return - same element 

let q4 = vegetable.shift()
console.log(q4)
console.log(vegetable)


//[11,22,33,4]
// push()     ====> new length
// unshift()  ====> new length
// pop()      ====> last element 
// shift()    ====> first element


// includes()
// action -- search for the element 
// return boolean True and False

//               0          1         2
let country = ["India","Pakistan","Srilanka"]
q5 = country.includes('pakistan')
console.log(q5)


// join()
// action - joins all element of array 
// return - string 

let info = ["chinmay","deshpande",7709192441]
let q6 = info.join("-") // "chinmay-deshpande-7709192441"
console.log(q6)

let q7 = info.join('@')
console.log(q7)
console.log(typeof q7)


// push()
// pop()
// shift()
// unshift()
// includes()
// join()


//              0       1         2        3
let fruits = ["apple","banana","grapes","mango"]

// push()
let a1 = fruits.push("Chikoo")
console.log(a1)
console.log(fruits)

//unshift()
let a2 =fruits.unshift("Papaya")
console.log(a2)
console.log(fruits)

//pop()
let a3 = fruits.pop()
console.log(a3)
console.log(fruits)

//shift()
let a4 = fruits.shift()
console.log(a4)
console.log(fruits)

// includes()
let a5 = fruits.includes("Apple")
console.log(a5)

// join()
let a6 = fruits.join('-')
console.log(a6)
console.log(typeof a6)

//------------------------------------------------->
// program 1
//               0      1    2   3
let birthYear = [1989,1990,1991,1992]
let ages = []
// [33,32,31,30]
// console.log(birthYear[0])
// console.log(birthYear[1])

for(let i = 0 ; i < birthYear.length ; i++){
   // console.log(i)
   console.log(2022 - birthYear[i])
   let a = 2022 - birthYear[i]
   ages.push(a)
}
console.log(ages)


// program2

//           0  1  2  3  4   5
let ages2 = [22,33,43,22,33,44]
let above30 = []
// [33,43,33,44]
for(let i = 0 ; i < ages2.length ; i++){
    //console.log(i)
    console.log(ages2[i])
    if(ages2[i] > 30){
        above30.push(ages2[i])
    }
}
console.log(above30)

// program3 

let s = [11,22,33]
let total = 0

for(let i = 0 ; i < s.length ; i++){
    total = total + s[i]
    //       0    +  11   =====> 11
    //       11   +  22   =====> 33
    //       33   +  33   =====> 66
}
console.log(total)
// Support Person

// Friday - 9:30 to 10 pm































