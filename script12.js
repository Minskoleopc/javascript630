//                0    1     2   3
let birthYear = [1989, 1990, 1991, 1992]
//[33,32,31,30]
let ages = []
for (let i = 0; i < birthYear.length; i++) {
    //console.log(i)
    //console.log(2022 - birthYear[i])
    let a = 2022 - birthYear[i]
    ages.push(a)
}
console.log(ages)

// map()
birthYear = [1989, 1990, 1991, 1992]
let q1 = birthYear.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2022 - el
})
console.log(q1)

let numbers = [11, 22, 33, 44, 55]
//[13,24,35,46,57]
let q2 = numbers.map(function (el, index, arr) {
    return el + 2
})
console.log(q2)

// Program2  filter()

let nums = [33, 44, 12, 33, 11, 22, 3, 44, 55]
let above30 = []
//[33,44,33,44,55]
for (let i = 0; i < nums.length; i++) {
    // console.log(i)
    // console.log(nums[i])
    if (nums[i] > 30) {
        above30.push(nums[i])
    }
}
console.log(above30)
let q3 = nums.filter(function(el,index,arr){
    return el > 30
})
console.log(q3)


let numC = [34,55,22,33,44,55,222,11]
let q4 = numC.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q4)


// program3

let marks = [11,22,33]
let total = 0

for(let i = 0 ; i < marks.length ; i++){
    total = total + marks[i]
    //       0    +    11   ====> 11
    //       11   +    22   ====> 33
    //       33   +    33   ====> 66
}
console.log(total)

// reduce
let q5 = marks.reduce(function(acc,el,index,arr){
    return acc + el  // =====> 11 ====> 33 ======>  66
},0)
console.log(q5)


