// // actual difference while loop and for loop
// let randomNumber = Math.floor(Math.random() * 6 + 1)
// console.log(randomNumber)

// let userInput = prompt('Enter the number between 1 to 6')
// if(userInput == randomNumber ){
//     console.log('Your guess is correct')
// }
// else {
//     console.log('your guess is incorrect')
// }
// let text = userInput == randomNumber?"correct":"incorrect"
// console.log("You  guess is "+text)


// let randomNumber2 = Math.floor(Math.random() * 6 + 1)
// console.log(randomNumber2)
// for(let i = 0 ; i < 5 ; i++){
//     let userInput = prompt('Enter the number between 1 to 6')
//     if(userInput == randomNumber2){
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect')
//     }

// }

let randomNumber3 = Math.floor(Math.random() * 6 + 1)
console.log(randomNumber3)
let userInput;
while (userInput != randomNumber3) {
    userInput = prompt('Enter the number between 1 to 6')
    if (userInput == randomNumber3) {
        console.log('you guess is correct')
        break
    }
    else {
        console.log("You guess is incorrect")
    }
}









