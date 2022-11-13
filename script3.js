// let and const 

let x = 100
console.log(x)
x = 600
console.log(x)

// const 
const h = 800
//h = 100
console.log(h)

// Arithmetic operator

// + - * / %


let q1 = 100
let q2 = 50
console.log(q1 + q2)
console.log(q1 - q2)
console.log(q1 * q2)
console.log(q1 / q2)
console.log(q1 % q2)

let q11 = 10
let q22 = 5
console.log(q11 + q22)
console.log(q11 - q22)
console.log(q11 * q22)
console.log(q11 / q22)
console.log(q11 % q22)

// functions

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(100,5)
Calculator(1000,50)

// function without parameter and with return type 

function addA(){
    console.log(6+6)  
}
addA()
addA()
addA()

// function with parameter and with out return type
function addB(x,y){
    console.log(x+y)
}
addB(12,4)
addB(10,5)
addB(2,4)

// function with parameter and with return type 
function addC(x,y){
    return x + y
}
let a = addC(1,2)
console.log(a)
console.log(a + a)
console.log(a * 0.10)

// Three ways to write function in javascript

// function declaration
function additionE(x,y){
    return x + y
}
let a1  = additionE(12,3)
console.log(a1)

// function expression 
let additionF = function(x,y){
    return x + y
}
let a2 = additionF(12,3)
console.log(a2)

// arrow function 
let additionG = (x,y)=>{
    return x + y
}
let a3 = additionG(12,3)
console.log(a2)


//-------------------------------------------

// function declaration
function additionR(x,y){
    return x + y
}
let q111 = additionR(12,3)
console.log(q111)

// function expression
let  additionRR = function(x,y){
    return x + y
}
let q222 = additionRR(12,6)
console.log(q222)


// arrow function
let  additionRRR = (x,y)=>{
    return x + y
}
let q2222 = additionRRR(12,6)
console.log(q2222)





