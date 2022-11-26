
// // let info = ["chinmay","deshpande",23,56]

// // // retrive
// // console.log(info[2])
// // // update 
// // info[1] = "dani"
// // console.log(info)
// // // add
// // info.push('pune')
// // info.unshift('Mr')
// // // delete
// // info.pop()
// // info.shift()
// // info.splice(1,1)

// // Object 

// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:23,
//     skills:["python","javascript"]
// }

// // retrive 
// console.log(info2.firstName)
// console.log(info2['lastName'])
// // update 
// info2.lastName = "dani"
// info2['lsatName'] = "deshmukh"
// //add 
// info2.city = "pune"
// info2['lang'] = "hindi" 
// // delete
// delete info2.city
// delete info2['city']

// //            0        1         2       3
// let names = ["amol","poorva","sachin","mayuri"]
// for(let i = 0 ; i < names.length ;i++){
//     console.log(names[i])
// }

// let info3 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:23,
//     rollNo:23
// }
// // dot notation 
// // bracket notation
// for(let property in info3){
//     console.log(property,info3[property])
// }

// let vehicle = {
//     color:"red",
//     type:"sedane",
//     city:"pune"
// }

// dot notation and bracket 
//console.log(vehicle['color'])

// for(let property in vehicle){
//     console.log(property,vehicle[property])
// }
// console.log(vehicle['color'])

//#######################################################

let students = [
    {
        firstName: "chinmay",
        city: "nagpur",
        age: "32",
        skills: ["python", "django", "javascript", "css"],
        marks: 90
    },
    {
        firstName: "poorva",
        city: "indore",
        age: "33",
        skills: ["python", "css3"],
        marks: 90
    }
    ,
    {
        firstName: "amol",
        city: "pune",
        age: "32",
        skills: ["sql3", "javascript5"],
        marks: 90
    }

]

// console.log(students[0].firstName)
// console.log(students[0].skills.length)

// name of all students with number of skills
// name:3


// students.forEach(function(el){
//     console.log(el.firstName+":"+el.skills.length)
// })
students.forEach(function(el){
    console.log(el.firstName+":"+el.skills.length)
})

// program2
// Add jira skills to all users
students.forEach(function(el){
    console.log(el.skills)
    el.skills.push('jira')
})
console.log(students)

// program3
//  user with python

let q1 = students.filter(function(el){
    return el.skills.includes('python')
})
console.log(q1)
q1.forEach(function(el){
    console.log(el.firstName)
})