class Bank {
    constructor(firstName , lastName , bal){
        this.firstName = firstName
        this.lastName = lastName
        this.balance  = bal
        this.transaction = []
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }

    depoist(amount){
        this.balance = this.balance + amount
        this.transaction.push(amount)
        return this.balance
    }
    withdrawl(amount){
        if(amount < this.bal){
            this.balance = this.balance - amount
            this.transaction.push(-amount)
            return this.balance
        }
        else {
            console.log('Insufficeint balance..')
        }
    }
    lastFiveTransaction(){
        return this.transaction.slice(-5)
    }
}
//  0  1   2  3  4  5  6  7 
// [11,22,33,44,55,66,77,88]
// -8 -7 -6  -5 -4 -3 -2  -1
//a.slice(2,5)

let chinmay = new Bank("chinmay","deshpande",100)
//chinmay.withdrawl(100000)

chinmay.depoist(100000)
chinmay.depoist(10000)
chinmay.depoist(1000)
chinmay.depoist(100)
chinmay.depoist(10)

chinmay.withdrawl(10000)
chinmay.withdrawl(1000)
chinmay.withdrawl(100)
chinmay.withdrawl(10)
chinmay.withdrawl(1)
console.log(chinmay.lastFiveTransaction())

