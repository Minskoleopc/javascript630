
// Math 

// console.log(Math.floor(12.3)) // 12
// console.log(Math.ceil(12.5)) // 13
// console.log(Math.round(12.5)) // 13
// console.log(Math.round(12.4)) // 13
// console.log(Math.random()) // 0 - 1
// console.log(Math.random()*6) //0-6
// console.log(Math.floor(Math.random()*6)) // 0,1,2,3,4,5
// console.log(Math.floor(Math.random()*6)+1) // 1,2,3,4,5,6

// create html file with extension .html
// ! and press tab 
// between body tag - add script file
// right click on file , copy file path on new browser tab
// right click >>> inspect >> console

// program1 (Guess the number -- chance - 1)

// let randomNumber = Math.floor(Math.random()*6 + 1)
// console.log(randomNumber)
// let userInput = prompt('Enter any number between 1 to 6')

// if(randomNumber == userInput){
//     console.log('Your Guess is correct')
// }
// else {
//     console.log('Your Guess in incorrect')
// }

// Program 2
// randomNumber == userInput ? console.log('Your Guess is correct')
// :console.log('Your Guess in incorrect')


// program 5

// let randomN = Math.floor(Math.random()*6 + 1) // 5
// console.log(randomN)
// let userInput2;
// for(let i  = 0 ; i <5 ; i++){ 
//     userInput2 = prompt("Enter the number between 1 to 6") 
//     if(randomN == userInput2){
//         console.log("Guess is correct")
//         break
//     }
//     else {
//         console.log("Guess is incorrect")
//     }
// }

// program 6

let randomN3 = Math.floor(Math.random()*6 + 1) // 5
console.log(randomN3)
let userInput3;
console.log(userInput3)

while(userInput3 != randomNumber) {
    userInput3 = prompt("Enter the number between 1 to 6")//5
    if(userInput3 == randomN3){ 
        console.log('Guess is correct')
        //break
    }
    else {
        console.log('Guess us incorrect')
    }

}

console.log(5 != 5)
console.log(undefined != 5)









