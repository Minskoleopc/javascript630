// // let city = "pune"
// // // String ----- type
// // // Property -   length 
// // // Method - toUpperCase() , toLowerCase()
// // // Method --- action and return 
// // console.log(typeof city)

// // // program2
// // let names = ["apple","mango","banana","grapes"]
// // Object literal

// let amol = {
//     fullName:"amol rao",
//     age:23,
//     rollNo:34,
//     skills:["js","c++","python","jquery"]
// }

// let chinmay = {
//     fullName:"chinmay deshpande",
//     age:33,
//     rollNo:22,
//     skills:["js","python","jquery"]
// }

// // retrive (dot notation and bracket)

// console.log(amol.fullName)
// console.log(amol['fullname'])

// // add

// amol.city = 'pune'
// amol['language'] = "marathi"

// // update 

// amol.city = "nagpur"
// amol['city'] = "wardha"

// // delete 

// delete amol.city
// delete amol['language']


//  template 


class Person {
    fullName = undefined
    age = undefined
    rollNo = undefined
    skills = undefined
}

let ram = new Person()
console.log(ram)
ram.fullName = "ram "
ram.age = 23
ram.rollNo = 23
ram.skills = ["python2","js",'css']
console.log(ram)

class Person2 {

    constructor(fullName,age,roll, skills){
        this.fullName = fullName
        this.age = age
        this.roll = roll
        this.skills = skills
    }

}

let poorva = new Person2("poorva vyas",29,34,["js","python"])
let sarika = new Person2("sarika vyas",26,31,["js","python3"])
console.log(poorva)
console.log(sarika)

// string , array , object , user defined , set , map

// string - object --- property and method
// array  - object --- property and method
// set  ---- object --- property and method
// map ---- object --   property and method
