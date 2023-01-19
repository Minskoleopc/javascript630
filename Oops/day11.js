// // polymorphism
// // Overloading     Overriding 
// // method Overloading -- same class , same  method name , same signature
// // method overriding  -- differnt class , same  same method name  , different signature

// // class  Cal {
// //     static Subtraction(x,y,z){
// //         if(x != undefined  && y != undefined && z != undefined){
// //             console.log(x-y-z)
// //         }
// //         else if(x !=  undefined && y != undefined){
// //             console.log(x-y)
// //         }
// //         else  {
// //             console.log('please enter valid inpur')
// //         }
// //     }
// // }

// // Cal.Subtraction(10,4,2)
// // Cal.Subtraction(10,4)
// // Cal.Subtraction(10)

// class WorlBank {
//     country = "India"
//     loan(x){
//         console.log('loan from world Bank')
//         return x 
//     }
//     save(x){
//         console.log('save from world Bank') 
//         return x 
//     }
// }
// class SBI extends WorlBank {

//     loan(x){
//         console.log('loan from SBI')
//         return x + 1 
//     }
//     save(x){
//         console.log('save from SBI') 
//         return x  + 1
//     }
    
// }

// class PNB extends 
//  {

//     // loan(x){
//     //     console.log('loan from PNB')
//     //     return x + 1  + 1
//     // }
//     // save(x){
//     //     console.log('save from PNB') 
//     //     return x  + 1 + 1
//     // }
    
// }


// let nagpur =  new SBI()
// console.log(nagpur.loan(1))
// console.log(nagpur.save(3))

// let wardh = new PNB()
// console.log(wardh.loan(1))
// console.log(wardh.save(3))

class Bank {
    constructor(firstName, lastName , bal){
        this.firstName = firstName
        this.lastName = lastName
        this.bal = bal
        this.transaction = []
    }
    withdrawl(amt){
        if(this.bal > amt){
            this.bal = this.bal - amt
            this.transaction.push(-amt)
            return this.bal
        }
        else {
            console.log('Insufficient')
        }
    }
    deposit(amt){
        this.bal = this.bal + amt
        this.transaction.push(amt)
        return this.bal

    }
    lastFiveTransactions(){
        return this.transaction.slice(-5)
    }
    //let a = [11,22,33,44,55,66,77]
    //a.slice(-5)
}
let  chinmay = new Bank("chinmay","deshpande",1000000)
console.log(chinmay.bal)
// chinmay.withdrawl(200000000)
chinmay.withdrawl(20)
chinmay.withdrawl(200)
chinmay.withdrawl(30)
chinmay.withdrawl(40)
chinmay.deposit(40)
chinmay.deposit(400)
chinmay.deposit(4000)
chinmay.deposit(400000)
chinmay.deposit(4000000)

console.log(chinmay.lastFiveTransactions())
console.log(chinmay.transaction)

//sum of all element of array






