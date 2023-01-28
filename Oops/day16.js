var firstName = "ram"
var lastName = "dani"

// let objA = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this   -------   objA
//         console.log(this.firstName + this.lastName) // chinmaydeshpande
//         let displayTwo = function(){
//             // this --- window ------ no firstName and lastName
//             console.log(this.firstName+this.lastName) // ramdani
//         }
//         displayTwo()
//     }
// }
// objA.display()


// let objA = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:function(){
//         // this   -------   objA
//         console.log(this.firstName + this.lastName) // chinmaydeshpande
//         let displayTwo = ()=>{
//             // this --- objA
//             console.log(this.firstName+this.lastName) // chinmaydeshpande
//         }
//         displayTwo()
//     }
// }
// objA.display()

// let objA = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     display:()=>{
//         // this   ------ window
//         console.log(this.firstName + this.lastName) // chinmaydeshpande
//         let displayTwo = ()=>{
//             // this -- window
//             console.log(this.firstName+this.lastName) // chinmaydeshpande
//         }
//         displayTwo()
//     }
// }
// objA.display()


// reset operator

//let cities = ["banglore","delhi","kolkalata","chennai"]

function displayNames(a,b,c,d,e){
    console.log("welcome "+ a)
}
displayNames("pune","delhi","banglore","kolkata","chennai")

//"pune","delhi","banglore","kolkata","chennai" =====> ["pune","delhi","banglore","kolkata","chennai"]

function displayNames(...a){
    console.log(a)
    a.forEach(function(el){
        console.log('welcome '+el)
    })
}
displayNames("pune","delhi","banglore","kolkata","chennai")

let cities = ["banglore","delhi","kolkalata","chennai"]
//["banglore","delhi","kolkalata","chennai"] ===> banglore , delhi
function firstTwoCity(a,b,c){
    console.log("welcome "+a)
    console.log("welcome "+b)
    console.log("welcome "+c)
}

//firstTwoCity(cities[0],cities[1])
firstTwoCity(...cities)

//a,v,b,f  ===> [a,v,b,f]reset
//[a,v,b,f] ===> a,v,b,f spread