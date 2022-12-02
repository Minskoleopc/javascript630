// In js everything is object 
// Property and method
let a = "amol"
// 0   1   2   3 
// a   m   o   l 
console.log(a[0]) // 'a'
console.log(a[1]) // 'm'
for(let i = 0 ; i < a.length ; i++){
    //console.log(i)
    console.log(a[i])
}
// program2 
//           0123
let city  = "pune"
let rev = ""
//console.log(city[0])
for(let i = 0 ; i < city.length ; i++){
   // console.log(i)
   //console.log(city[i])
   rev = city[i] + rev
   //       p  + "" ====> p
   //       u  + p  ====>up  
   //       n  + up =====> nup
   //       e  + nup ====> enup
}
console.log(rev)
rev2 = ""
for(let i = city.length -1 ; i >= 0 ; i--){
        //console.log(i)
        console.log(city[i])
        rev2 = rev2 + city[i]
        //    ''  +   e     =====> e
        //      e +    n    =====> en
        //     en  +    u   =====> enu
        //     enu +    p   ======> enup
    
 }
 console.log(rev2)

 // program2
 // vowels from from "string"

 let vowels = 'chinmaydeshpande'
 let count = 0
 //'aueio'
 for(let i = 0 ;  i < vowels.length ; i++){
    if(vowels[i] == 'a' || vowels[i] == 'e'|| vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u'){
        count = count + 1
    }   
 }
 console.log(count)

 // String object --- 
 // properties and method
 // properties and method --- action and return type

 let country = "India"
 console.log(country.length)


 // toLowerCase()
 let country2 = "ausTralia"
 let q1 = country2.toLowerCase()
 console.log(q1)
 // toUpperCase()
 let q2 = country2.toUpperCase()
 console.log(q2)
 // includes()
 let q3 = country2.includes('T')
 console.log(q3)
 // indexOf()
 let country4 = 'cuba' 
 let q4 = country4.indexOf('u')
 let q5 = country4.indexOf('l')
 console.log(q4)
 console.log(q5)
 // charAt()

 let city5 = "Nagpur"
 let q6 = city5.charAt(3)
 console.log(q6)

 // 3 logical program
 // toUpperCase()
 // toLowerCase()
 // indexOf()
 // includes()
 // charAt()





