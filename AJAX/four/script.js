// async function 
// function createUser(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)
// }

// function getId(){
//     setTimeout(function(){
//         console.log("get ID")
//     },2000)
// }

// function getInfo(){
//     setTimeout(function(){
//         console.log("getInfo")
//     },1000)
// }

// createUser()
// getId()
// getInfo()

function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)
    })
}
function getId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get Id")
        }, 2000)
    })
}
function getInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("get info")
        }, 1000)
    })
}
// createUser().then(function(res){
//     console.log(res)
//     return getId()
// }).then(function(res){
//     console.log(res)
//     return getInfo()
// })
// .then(function(res){
//     console.log(res)
// })

async function getUsersInfo(){
   let res1 =  await  createUser()
   console.log(res1)
   let res2 =  await  getId()
   console.log(res2)
   let res3 =  await  getInfo() 
   console.log(res3)
}
getUsersInfo()


// parallel execution of promise

// 3                 2               1
//call 1  =====>   call2 =====>    call3 ====>
// 3                    2             1
// call1   =======>   call2  ======> call3

// promise combinators 

//Promise.all()
//Promise.any()
//Promise.race()
//Promise.allSettled()


async function getUsers(){
    let qq = await Promise.all([
        createUser(),
        getInfo(),
        getId()
    ])
    console.log(qq)
}
getUsers()



