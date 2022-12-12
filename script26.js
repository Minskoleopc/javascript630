
// array , object and string 
// javascript --- everthing is object 


//human
// property  - age ,weight , height , color 
// method  -  walk() , talk()


//vehicle 
//property -  color , model number 
// method - start() , stop()

//Bank 
// property accNo , bal 
// method - withdrawl() , deposit()

// String --- 
// property - length 
// method - toLowerCase() , toUpperCase()

// Array ---
// Property -- length 
// Method -- push() , pop(), shift()


class Person {
    fullName = "chinmay deshpnade";
    rollNo = 7
    walk(){
        console.log('I am walking')
    }
    talk(){
        console.log('I am talking')
    }
}

let amol = new Person()
console.log(amol.fullName)
console.log(amol.rollNo)

amol.talk()
amol.walk()

let names = ["chinmay","sarika"]
console.log(names.length)
names.push()
names.pop()



