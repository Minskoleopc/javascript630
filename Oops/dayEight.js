// student --- firstName  , lastName , age , adharCarNumber
// teacher  -(firstName  , lastName , age , adharCarNumber) , salary
// professor - (firstName  , lastName , age , adharCarNumber ,salary) , specialzation

class Student {
    firstName =  "chinmay"
    lastName = "deshpande"
    age = 33
    adharCard = 123

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
class Teacher  extends Student{

    // inheriting from student 
    // firstName =  "chinmay"
    // lastName = "deshpande"
    // age = 33
    // adharCard = 123
    salary = 1000


    // inheriting from student 
    // displayName(){
    //     console.log(this.firstName + this.lastName)
    // }
}

class Professor extends Teacher {
    specialization = "English"
}

let chinmay = new Professor()
console.log(chinmay)
chinmay.displayName()

// let chinmay = new Teacher()
// console.log(chinmay)
// chinmay.displayName()

// let chinmay = new Student()
// console.log(chinmay)
// chinmay.displayName()


// // program 2

// class StudentB {
//     constructor(firstName ,lastName ,age, adharCard){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.adharCard = adharCard
//     }

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class TeacherB  extends StudentB{
//     salary = 5000
// }

// let amol = new TeacherB("amol","rao",23,56)
// console.log(amol)

// program 3


class StudentC {
    constructor(firstName ,lastName ,age, adharCard){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.adharCard = adharCard
    }

    displayName(){
        console.log(this.firstName+ this.lastName)
    }
}

class TeacherC  extends StudentC{
    constructor(firstName ,lastName ,age, adharCard,salary){
        super(firstName ,lastName ,age, adharCard)
        this.salary = salary
    }
}

let amol = new TeacherC("amol","rao",23,56,80000)
console.log(amol)
// let amol = new StudentB("amol","rao",23,34)
// console.log(amol)










