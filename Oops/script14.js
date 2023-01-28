// lexical scope 

function addition(){
    let x = 100
    let y = 50
    console.log(x+y)
    function additionB(){
        let a = 10
        let b = 20
        console.log(x+y)
        console.log(a+b)
        //console.log(s+t) :- child field is not accessible
        function additionC(){
            let s = 190
            let t = 80
            console.log(x+y+a+b+s+t)
        }
        additionC()
    }
    additionB()
}
addition()
// closures 

// program 2
// return is the last statment for a function
// function additionE(){
//     let s = 100
//     let t = 50
//     console.log(s+t)
//     return s + t
//     console.log('hello')
// }
// let t1 = additionE()
// console.log(t1)


// program 2b
// function additionG(){
//     let q1 = 100
//     let q2 = 50
//     return function(){
//         console.log(q1 + q2)
//     }
// }
// let r1 = additionG()

// // let  r1 = function(){
// //     console.log(q1 + q2)
// // }

// r1()
// actual difference between arrow function and function  expression and declaratio 

// function declaration 

function Addition(x,y){
    return  x + y
}
let q1 = Addition(12,3)
console.log(q1)

// function expression 
let AdditionB = function(x,y){
    return x + y
}
let q2  = AdditionB(12,14)
console.log(q2)


// arrow funtion
// let AdditionC = (x,y) =>{
//     console.log("hello")
//     return x + y
// }
// let q3  = AdditionC(12,14)
// console.log(q3)

let AdditionC = (x,y) =>x + y
let q3  = AdditionC(12,14)
console.log(q3)

// rest and spread operator

// lexical scope 

// function Sub(){
//     let x = 10 
//     let y = 5
//     console.log(x+y)
//     function SubB(){
//         let a = 100
//         let b = 50
//         console.log(x+y+a+b)
//         //console.log(a1+a2)
//         function SubC(){
//             let a1 = 100
//             let a2 = 50
//             console.log(a1+a2+a+b+x+y)
//         }
//         SubC()
//     }
//     SubB()
// }
// Sub()

// closures 

function addition(){
    let qq = 100
    let qq2 = 50

    return function(){
        console.log(qq+qq2)
    }
}

let a = addition()
console.log(a)

// let a = function(){
//     console.log(qq+qq2)
// }

a()



function additionE(x,y){
    console.log(x+y)
    return x + y
}
let a1 = additionE(12,4)
console.log(a1)


let additionF = function(x,y){
    return x + y
}
let a2 = additionF(1,2)
console.log(a2)


let additionG = (x,y)=>{
    return x + y
}
let a3 = additionG(1,2)
console.log(a3)

let additionGa = (x,y)=> x + y
let a4 = additionGa(1,2)
console.log(a4)

// action difference between arrow function and function expression

var firstName = "ninad"
var lastName = "deshmukh"


// let ram = {
//     firstName:"ram",
//     lastName:"dani",
//     display:function(){
//         // console.log(this) // ram
//         console.log(this.firstName + this.lastName)
//         let display2 = function(){
//             //console.log(this) // window
//             console.log(this.firstName+this.lastName)
//         }
//         display2()
//     }
// }

// ram.display()



// let ram = {
//     firstName:"ram",
//     lastName:"dani",
//     display:function(){
//         // console.log(this) // ram
//         console.log(this.firstName + this.lastName)

//         let display2 = ()=>{
//             console.log(this.firstName+this.lastName)
//         }
//         display2()
//     }
// }

// ram.display()




// let ram = {
//     firstName:"ram",
//     lastName:"dani",
//     display:()=>{
//         // console.log(this) // ram
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//             console.log(this.firstName+this.lastName)
//         }
//         display2()
//     }
// }

//ram.display()












// ram.display()
// console.log(ram.display)
// console.log(ram.firstName)



//let aa = ram.display
// let aa = function(){
//     console.log(this.firstName + this.lastName)
// }