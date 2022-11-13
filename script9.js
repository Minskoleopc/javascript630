// floor
console.log(Math.floor(12.6))
console.log(Math.floor(13.9))
console.log(Math.floor(-13.5)) // -13

// ceil

console.log(Math.ceil(12.4))
console.log(Math.ceil(15.4))
console.log(Math.ceil(-16.4))

//-16.5  -16------- -1 0 1 2 3 4 5 

// round
console.log(12.5) // 13
console.log(12.3) // 12

// random

Math.random()    //  0 -------1
console.log(Math.random())
console.log(Math.random()*6) // 0   ------  6 // 0.12,1.34,2.44,3.44,4.88,5.99
console.log(Math.floor(Math.random()*6)) // 0,1,2,3,4,5
console.log(Math.floor(Math.random()*6)+1)
let randomNumber = Math.floor(Math.random()*6)+1 // 1 to 6
console.log(randomNumber)


console.log(Math.random())  // 0 - 1
console.log(Math.random()*6)// 0 - 6 
console.log(Math.floor(Math.random()*6))
console.log(Math.floor(Math.random()*6)+1)


let randomNumberC = Math.floor(Math.random()*6)+1

//Common