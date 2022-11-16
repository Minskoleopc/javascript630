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





























