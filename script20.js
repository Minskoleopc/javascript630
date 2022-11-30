let students = [
    {
        firstName: "chinmay",
        city: "nagpur",
        age: 32,
        skills: ["python", "django", "javascript", "css"],
        marks: 90
    },
    {
        firstName: "poorva",
        city: "indore",
        age: 33,
        skills: ["python", "css3"],
        marks: 90
    }
    ,
    {
        firstName: "amol",
        city: "pune",
        age: 32,
        skills: ["sql3", "javascript5","python"],
        marks: 90
    },
    {
        firstName: "mayuri",
        city: "pune",
        age: 24,
        skills: ["sql3", "javascript5"],
        marks: 99
    },

    {
        firstName: "amit",
        city: "pune",
        age: 24,
        skills: ["sql3", "javascript5","python"],
        marks: 93
    }

]

// names of user along with skills
// chinmay:4
students.forEach(function(el){
    console.log(el.firstName,el.skills.length)
})

// program2
// add jira as skill set to every user
students.forEach(function(el){
    el.skills.push('jira')
})
console.log(students)

// program3
// user with python skill
// let q1 = students.filter(function(el){
//     return el.skills.includes('python')
// })
// console.log(q1)
// q1.forEach(function(el){
//     console.log(el.firstName)
// })

// students.forEach(function(el){
//     if(el.skills.includes('python')){
//         console.log(el.firstName)
//     }
// })

// program4

let q2 = students.filter(function(el){
    return el.city  == "pune"
})
q2.forEach(function(el){
    console.log(el.firstName)
})

students.forEach(function(el){
    if(el.city === 'pune'){
        console.log(el.firstName)
    }
})

// program 5
// user with city pune and python skills
let q3 = students.filter(function(el){
    return el.city === "pune"  &&  el.skills.includes('python')
})
q3.forEach(function(el){
    console.log(el)
})
students.forEach(function(el){
    if(el.skills.includes('python') && el.city == "pune"){
        console.log(el.firstName)
    }
})

// program 6
// average age of all students
//let j = [11,22,33]
// let q4 = students.reduce(function(acc,el){
//     return acc + el.age
// },0)
// console.log(q4/students.length)


// program7

// let q4 = students.filter(function(el){
//     return el.firstName.startsWith('a')
// })

// q4.forEach(function(el){
//     console.log(el.firstName)
// })


