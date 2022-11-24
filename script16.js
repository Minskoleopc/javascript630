let arr = ["chinmay","deshpande",23,45]

let info = {
    // property -value 
    // key      -value
    firstName:"chinmay",
    lastName:"deshpande",
    rollNo:23,
    age:45
}
console.log(info)


//              0          1       2  3
let info2 = ["chinmay","deshpande",12,34]
// retrive
console.log(info2[0])
// update 
info2[1] = "dani"
console.log(info2)
//add
info2.push('marathi')
info2.unshift('Mr')
console.log(info2)

// delete
info2.pop()
info2.shift()
info2.splice(2,1)


let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:34
}

// object does not stores the value by index
//console.log(info3[0])

// retrive (dot notation / bracket notation)
console.log(info3.firstName)
console.log(info3['firstName'])
// update (dot notation and bracket)
info3.firstName = "tanmay"
info3['lastName'] = "bhatt"
console.log(info3)
// add(dot notation / bracket notation)
//info3.firstName = "ram" // update
info3.city = "pune"
info3['lang'] = "hindi"
console.log(info3)
// delete (dot notation / bracket notation)
delete info3.city
delete info3['lang']
console.log(info3)

//------------------------------------>

let vehicle = {
    color:"red",
    type:"SUV"
}

// retrive 
console.log(vehicle.color)
console.log(vehicle['color'])
// udapte 
vehicle.color = "blue"
vehicle['color'] = "green"
// add
vehicle.regNo = 123
vehicle['city'] = "nagpur"
// delete
delete vehicle.color
delete vehicle['city']


//           0        1           2         3
let city = ["pune","banglore","kolkata","chennai"]

for(let i = 0 ; i < city.length ; i++){
    console.log(i)
    console.log(city[i])
}
