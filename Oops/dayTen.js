//  class Addition {
//     add(x){
//         console.log(x)
//     }

//     add(x,y){
//         console.log(x+y)
//     }
//     add(x,y,z){
//         console.log(x+y+z)
//     }

//  }

//  let a = new Addition()
//  a.add(1,3,4)

// same class , same method name different signature (overloading)

class Addition {
    additionA(x,y,z){
    //console.log(x,y,z)
        if(x != undefined && y != undefined && z != undefined){
            console.log(x+y+z)
        } 
        else if( x != undefined && y != undefined){
            console.log(x+y)
        }
        else if(x != undefined){
            console.log(x)
        }
    }

}

let a = new Addition()
a.additionA(1,2,3)
a.additionA(1,2)
a.additionA(1)

// different class , same method same signatur (always inheritance)

class Mother {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Son  extends Mother {

    constructor(fn,ln,sname){
        super(fn,ln)
        this.sname = sname
    }

    displayName(){
        console.log(this.sname + this.lastName)
    }

}
let chinmay = new Son("ram","sham","rami")
chinmay.displayName()

