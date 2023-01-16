// class GrandFather {
//     firstName = "manohar"
//     lastName = "deshpande"
//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }

// }

// class Father extends GrandFather{
//     fatherFirstName = "shirish"

//     displayNameFName(){
//         console.log(this.fatherFirstName + this.lastName)
//     }
// }

// class Son extends Father {
//     sName = "chinmay"

//     displaySonName(){
//         console.log(this.sName + this.lastName)
//     }
// }

// let chinmay = new Son()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.fatherFirstName)
// console.log(chinmay.sName)
// chinmay.displayName()
// chinmay.displayNameFName()
// chinmay.displaySonName()



// let shirish  = new Father();
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// console.log(shirish.fatherFirstName)
// shirish.displayNameFName()
// shirish.displayName()



// let manohar = new GrandFather()
// manohar.displayName()

// // Program 2

// class GrandFather {
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName(){
//         console.log(this.firstName+this.lastName)
//     }
// }

// class Father extends GrandFather {
//     firstFName = "shirish"
// }

// let shirish = new Father("manohar","deshpande")



// Program 2

class GrandFather {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Father extends GrandFather {
    constructor(firstName, lastName,firstFname) {
        super(firstName, lastName)
        this.firstFname = firstFname
    }

    displayFName(){
        console.log(this.firstFname + this.lastName)
    }
}

class Son extends Father {
    constructor(firstName, lastName,firstFname,sName){
        super(firstName, lastName,firstFname)
        this.sName = sName
    }

    displaySName(){
        console.log(this.firstFname + this.lastName)
    }
}

let chinmay =  new Son("manahor","deshpande","shirish","chinmay")

chinmay.firstName
chinmay.lastName
chinmay.firstFname
chinmay.Son

chinmay.displayName()
chinmay.displayFName()
chinmay.displaySName()

//let shirish = new Father("manohar", "deshpande","shirsh")
// let manohar = new GrandFather("manohar","deshpande")
// console.log(manohar.firstName)
// console.log(manohar.lastName)
// manohar.displayName()

// program 


class Mother {
    constructor(fn,ln){
        this.firstFname = fn
        this.lastName = ln
    }
    displayMname(){
        console.log(this.firstFname + this.lastName)
    }
}
class SonA extends Mother {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }

}

class DaughterS  extends Mother {
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
    displayDname(){
        console.log(this.dname + this.lastName)
    }
}

let chinmaya = new SonA("kanchan","deshpande","chinmay")
let gauri = new SonA("kanchan","deshpande","gauri")