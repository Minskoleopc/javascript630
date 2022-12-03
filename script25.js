let city = "pune"

//  0  1  2  3
//  p  u  n  e

console.log(city)
console.log(city[0])
console.log(city[1])

// for loop 
for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}


// pune
// enup

let rev = ""

for(let i = 0 ; i < city.length ; i++){
    // console.log(i)
    // console.log(city[i])
    rev = city[i]+ rev
    //     p    +  ""  ====>p
    //     u    +   p  ====>up
    //     n    +   up =====> nup
    //     e    +   nup ======> enup

}

// program 2
// rev2 = ""
// for(let i = city.length -1 ; i >= 0 ; i--){
//     //console.log(i)
//     //console.log(city[i])
//     rev2 = rev2 + city[i]
//     //    
// }
// console.log(rev2)


// program 3
// Object ==> property and method


let city2 = "nagpur"
console.log(city2.length)

// toLowerCase() , toUpperCase() , includes() , indexOf() , charAt()


let city3 =  "WARDHA"
let q1 = city3.toLowerCase()
console.log(q1)
console.log(typeof q1)

let city4 = "goa"
let q2 = city4.toUpperCase()
console.log(q2)

let city5 = "chandrapur"
let q3 = city5.includes('a')
let q4 = city5.includes('ha')
let q5 = city5.includes('R')
console.log(q3)
console.log(q4)
console.log(q5)



let city6 = "jaipur"
//0           1         2        3     4     5
//j           a         i        p     u     r
console.log(city6[5])
let q6 = city6.indexOf('5')
console.log(q6)
let q7 = city6.indexOf('i')
console.log(q7)


let city7 = "kolhapur"
// 0  1 2  3  4  5  6  7
// k  o l  h  a  p  u  r
console.log(city7.charAt(2))


// 0     1    2     3    4    5   6   7   8    9
// c     h    a     n    d    r   a   p   u    r
// -10  -9   -8    -7   -6   -5  -4  -3  -2   -1

let city8 = "chandrapur"
//console.log(city8.slice(startPostion,endPosition))
console.log(city8.slice(2))
console.log(city8.slice(-3))
console.log(city8.slice(1,7))
console.log(city8.slice(-9,-3))
console.log(city8.slice(-9,6))
console.log(city8.slice(2,-1))
console.log(city8.slice(-1,-7))


// split()
let info = "chinmay-deshpande-770192441"
let info2 = info.split('-') // ["chinmay","deshpande","770192441"]
console.log(info2)

// trim() , trimStart() , trimEnd()

let info3 = " india "
console.log(info3.length)    
let info4 = info3.trim()
console.log(info4)

let info5 = info3.trimStart()
console.log(info5.length)

let info7 = info3.trimEnd()
console.log(info7.length)