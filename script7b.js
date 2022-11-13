

// conditional statement 
// one input and mutiple outcomes - conditional statements

// numberT <= 5                 ====> 10%
// numberT > 5 && numberT <= 10 ====> 20 %
// numberT > 10                 ====> 30 %

let numberT = 11
// if(numberT <= 5){
//     console.log("10 % discount")
// }
// if(numberT > 5 && numberT <= 10){
//     console.log("20 % discount")
// }
// if(numberT > 10){
//     console.log("30 % discount")
// }

// if else if

// if(numberT <= 5){
//     console.log("10 % discount")
// }
// else if(numberT > 5 && numberT <= 10){
//     console.log("20 % discount")
// }
// else if(numberT > 10){
//     console.log("30 % discount")
// }

let marks = 66

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }


// tenary

let a = 10
let b = 5

// if(a > b){
//     console.log('A is greater')
// }
// else {
//     console.log('B is greater')
// }

a > b ? console.log("A is greater") : console.log('B is greater')

let age = 18
let q1 = age >= 18 ? "can drive" : "cannot drive"
console.log(q1)


// Switch case


let city = "nagpur"

// switch(city){
//     case "pune":
//         console.log("MH")
//     case "bhopal":
//         console.log("MP")
//     case "jaipur":
//         console.log("RJ")
//     default:
//         console.log("No city")
// }

// switch (city) {
//     case "pune":
//         console.log("MH")
//         break
//     case "bhopal":
//         console.log("MP")
//         break
//     case "jaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("No city")
// }

// switch (city) {
//     case "pune":
//     case "nagpur":
//         console.log("MH")
//         break
//     case "bhopal":
//     case "indore":   
//         console.log("MP")
//         break
//     case "jaipur":
//     case "udaipur":
//         console.log("RJ")
//         break
//     default:
//         console.log("No city")
// }

// Truthy or Falsy
// Truthy - 'A' , "chinmay" , -1 , " ", {} , [], 8==8 , true, @
// Falsy  - 0 , null , undefined , 7 < 6 , false , NaN ,""
// 0 null undefined NaN IMP !

if(8 == 8){
    console.log("Hello")
}
else {
    console.log("Bye")
}







